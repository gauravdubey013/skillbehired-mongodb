import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { firstname, lastname, email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Error : User already exists!", { status: 400 });
  }

  const hashPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User Registered!", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error : " ,error, {
      status: 500,
    });
  }
};
