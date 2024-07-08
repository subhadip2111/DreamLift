import { NextResponse } from "next/server";
import { ConnectDb } from "@/config/db";
import BlogModel from "@/config/models/BlogModel";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;


const dbConnection = async () => {
    await ConnectDb();
  };
  dbConnection();


export async function GET(request,context) {
   

    try {
        const { params } = context;
        const { blogId } = params;
      

        if (!Types.ObjectId.isValid(blogId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid BLogID " }), {
              status: 400,
            });
          }

              const blog = await BlogModel.findById(blogId);
              if (!blog) {
                return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
              }
              return NextResponse.json({ data: blog }, { status: 200 });
            } catch (error) {
              console.error("Error fetching blog:", error);
              return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
            }
    
       
      }


      /**
       * import { NextResponse } from "next/server";
import { ConnectDb } from "@/config/db";
import BlogModel from "@/config/models/BlogModel";
import { Types } from "mongoose";

const dbConnection = async () => {
  await ConnectDb();
};
dbConnection();

export async function GET(request, context) {
  try {
    const { params } = context;
    const { blogId } = params;

    if (!Types.ObjectId.isValid(blogId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid BlogID" }), {
        status: 400,
      });
    }

    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return new NextResponse(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ data: blog }), { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch blog" }),
      { status: 500 }
    );
  }
}

       */