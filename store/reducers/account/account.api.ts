

type LoginAPI = {
    email:string,
    password:string
}
export const loginAPI = async (data : LoginAPI, thunkAPI : any) =>{

    try {

        await new Promise((resolve, rejected) =>{

            resolve("success")
            //rejected("error")
       })
        
    } catch (error) {
        
        thunkAPI.rejectWithValue(error);
    }
}