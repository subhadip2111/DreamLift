import { ConnectDb } from "@/config/db";
import ExamModel from "@/config/models/ExamModel";
import { data } from "autoprefixer";
import { NextResponse, NextRequest } from "next/server";

const dbConnection = async () => {
  await ConnectDb();
};
dbConnection();

export async function POST(request) {
  try {
    // const {name,level,lastDate,registrationDeadline,eligibility,subjects,format,syllabus,syllabusLink,duration,officialWebsite,importantNotes,opportunities} = await request.json()

    const body = await request.json();
    // console.log(data);
    //   const exam = new ExamModel(data);
    //   await exam.save();

    const saveData = new ExamModel(body);
    const result = await saveData.save();
    return NextResponse.json({ success: "true", data: result });
  } catch (error) {
    console.error("Error creating exam:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const limit = parseInt(queryParams.get("limit")) || 10; // Default limit to 10 if not provided
  const offset = parseInt(queryParams.get("offset")) || 0; // Default offset to 0 if not provided
  const keyword = queryParams.get("keyword");
  const subjects = queryParams.get("subjects")?.split(",") || []; // Split subjects into an array
  const level = queryParams.get("level")?.split(",") || []; // Split subjects into an array
  const degree = queryParams.get("degree")?.split(",") || []; // Split subjects into an array

  try {
    let query = {};

    // Add keyword search for name and eligible fields
    if (keyword) {
      query = {
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { eligibility: { $regex: keyword, $options: "i" } },
          {
            level: { $regex: keyword, $options: "i" },
          },
          { degree: { $in: [new RegExp(keyword, "i")] } },
          { stream: { $regex: keyword, $options: "i" } }, // Case-insensitive regex search for stream
          { subjects: { $in: [new RegExp(keyword, "i")] } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      };
    }
    // Add filter for subjects
    if (subjects.length > 0) {
        query.subjects = { $in: subjects.map(subj => new RegExp(subj, 'i')) }; // Case-insensitive regex search for subjects array
    }

    if(degree && degree.length >0)
        {
            query.degree = { $in: degree.map(degr => new RegExp(degr, 'i')) }; // Case-insensitive regex search for subjects array
        }
    if (level.length > 0) {
      query.level = { $in: query };
    }
    // Fetch exams based on query and pagination
    const exams = await ExamModel.find(query).limit(limit).skip(offset).exec();

    return NextResponse.json({ success: true, data: exams });
  } catch (error) {
    console.error("Error fetching exams:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 *   async findAll(dto: GetAllThreadsDto) {
    try {
      const query = {};
      query['grant_id'] = dto.grant_id;

      if (dto.subject && dto.subject !== undefined) {
        query['subject'] = { $regex: new RegExp(dto.subject, 'i') };
      }
      if (dto.any_email && dto.any_email !== undefined) {
        query['$or'] = [
          {
            'latest_draft_or_message.from.email': {
              $regex: new RegExp(dto.any_email, 'i'),
            },
          },
          {
            'latest_draft_or_message.to.email': {
              $regex: new RegExp(dto.any_email, 'i'),
            },
          },
          {
            'latest_draft_or_message.cc.email': {
              $regex: new RegExp(dto.any_email, 'i'),
            },
          },
          {
            'latest_draft_or_message.bcc.email': {
              $regex: new RegExp(dto.any_email, 'i'),
            },
          },
        ];
      }

      if (dto.to && dto.to !== undefined) {
        query['latest_draft_or_message.to'] = {
          $elemMatch: { email: { $regex: new RegExp(dto.to, 'i') } },
        };
      }

      if (dto.from && dto.from !== undefined) {
        query['latest_draft_or_message.from'] = {
          $elemMatch: { email: { $regex: new RegExp(dto.from, 'i') } },
        };
      }

      if (dto.cc && dto.cc.length > 0) {
        const ccArray = dto.cc.split(',');
        query['latest_draft_or_message.cc.email'] = {
          $in: ccArray.map((email) => new RegExp(email.trim(), 'i')),
        };
      }

      // add a or conditions for inside starred value as well

      if (dto.unread !== undefined) {
        query['unread'] = {
          $eq: dto.unread,
        };
      }
      if (dto.starred && dto.starred !== undefined) {
        query['starred'] = {
          $eq: dto.starred,
        };
      }

      if (dto.latest_message_before) {
        query['latest_message_sent_date'] = { $lt: dto.latest_message_before };
      }

      if (dto.latest_message_after) {
        query['lstartte'] = {
          $gt: dto.latest_message_after,
        };
      }

      // search query on text basis
      if (dto.search_query_native) {
        const searchQuery = dto.search_query_native;
        query['$or'] = [
          { subject: { $regex: new RegExp(searchQuery, 'i') } },
          {
            'latest_draft_or_message.cc.email': {
              $regex: new RegExp(searchQuery, 'i'),
            },
          },
          {
            'latest_draft_or_message.body': {
              $regex: new RegExp(searchQuery, 'i'),
            },
          },
          {
            'latest_draft_or_message.bcc.email': {
              $regex: new RegExp(searchQuery, 'i'),
            },
          },
          {
            'latest_draft_or_message.from.email': {
              $regex: new RegExp(searchQuery, 'i'),
            },
          },
          {
            'latest_draft_or_message.to.email': {
              $regex: new RegExp(searchQuery, 'i'),
            },
          },
          { folders: { $regex: new RegExp(searchQuery, 'i') } },
          {
            'latest_draft_or_message.participants.email': {
              $regex: new RegExp(searchQuery, 'i'),
            },
          },
          {
            'latest_draft_or_message.participants.name': {
              $regex: new RegExp(searchQuery, 'i'),
            },
          },
        ];
      }
      const limit = dto.limit || 10; // Default limit to 10 if not provided from frontend side (optional)
      const skip = dto.page_token ? (parseInt(dto.page_token) - 1) * limit : 0; // Calculate the skip value based on page_token

      const threads = await this.threadsModel
        .find(query)
        .limit(limit)
        .skip(skip);

      const count = await this.threadsModel.countDocuments(query).exec();

      return { threads, count };
    } catch (error) {}
  }


 */
