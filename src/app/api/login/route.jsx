import { NextResponse } from 'next/server'

export async function POST(req) {
  const body = await req.json()
  try {
    const res = await dataect;
    if (res.data[0]) {
        // code set token, cookie to response
      return {
        status: 200,
        body: {
          message: 'Success',
          data: res.data[0],
        },
      }
    } else {
      return {
        status: 404,
        body: {
          message: 'Not found',
        },
      }
    }
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
