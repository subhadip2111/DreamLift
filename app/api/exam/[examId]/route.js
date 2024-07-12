import { ConnectDb } from "@/config/db";
import ExamModel from "@/config/models/ExamModel";
import { NextResponse, NextRequest } from "next/server";
import { Types } from "mongoose"; // Import Types from mongoose

const dbConnection = async () => {
  await ConnectDb();
};
dbConnection();
export async function GET(request,{params}) {
    const id = params.examId
console.log(id);
    try {
      
      

        if (!Types.ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ message: "Invalid examID " }), {
              status: 400,
            });
          }

              const exam = await ExamModel.findById(id);
              if (!exam) {
                return NextResponse.json({ error: 'exam not found' }, { status: 404 });
              }
              return NextResponse.json({ data: exam }, { status: 200 });
            } catch (error) {
              console.error("Error fetching exam:", error);
              return NextResponse.json({ error: 'Failed to fetch exam' }, { status: 500 });
            }
    
       
      }