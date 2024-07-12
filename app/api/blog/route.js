    import { ConnectDb } from "@/config/db";
    import BlogModel from "@/config/models/BlogModel";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");



const dbConnection = async () => {
  await ConnectDb();
};
dbConnection();
export async function GET(request) {
    try {
      const allBlogs = await BlogModel.find({});
      return NextResponse.json({ data: allBlogs }, { status: 200 });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
  }

export async function POST(request) {
  const data = await request.formData();
    
  const timeStamp = Date.now();
  const image = data.get("image");
  const imageToBytes = await image.arrayBuffer();
  const buffer = Buffer.from(imageToBytes);
  const path = `./public/${timeStamp}_${image.name}`;

  await writeFile(path, buffer);

  const imageUrl = `/${timeStamp}_${image.name}`;

  const blogData = {
    author: `${data.get("author")}`,
    title: `${data.get("title")}`,
    description: `${data.get("description")}`,
    tags: `${[data.get("tags")]}`,
    // image: ` ${process.env.BASEURL}${imageUrl}`,
    image:`${imageUrl}`,
    content:`${data.get("content")}`,

  };
  const resp = await BlogModel.create(blogData);
  return NextResponse.json({ msg: "Blog created succesfully", data: resp });
}






