import { ConnectDb } from "@/config/db";
import TeachersModel from "@/config/models/TeachersModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

const dbConnection = async () => {
    await ConnectDb();
};
dbConnection();

export async function POST(request) {
    const data = await request.formData();

    const timeStamp = Date.now();
    const image = data.get("profilePic");
    const imageToBytes = await image.arrayBuffer();
    const buffer = Buffer.from(imageToBytes);
    const path = `./public/${timeStamp}_${image.name}`;

    await writeFile(path, buffer);

    const imageUrl = `/${timeStamp}_${image.name}`;

    // Construct the examPreparation array from the form-data
    const examPreparation = [];
    let index = 0;
    while (data.get(`examPreparation[${index}].examName`) && data.get(`examPreparation[${index}].fees`)) {
        examPreparation.push({
            examName: data.get(`examPreparation[${index}].examName`),
            fees: data.get(`examPreparation[${index}].fees`)
        });
        index++;
    }

    const teachersData = {
        name: data.get("name"),
        contactInfo: data.get("contactInfo"),
        mobile: data.get("mobile"),
        address: data.get("address"),
        profilePic: imageUrl,
        examPreparation: examPreparation
    };

    console.log(teachersData);

    try {
        const resp = await TeachersModel.create(teachersData);
        return NextResponse.json({ msg: "Profile created successfully", data: resp });
    } catch (error) {
        return NextResponse.json({ msg: "Error creating profile", error: error.message }, { status: 500 });
    }
}
