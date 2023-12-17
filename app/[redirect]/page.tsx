import axios, { AxiosResponse } from "axios"
import { redirect } from "next/navigation"

interface Response extends AxiosResponse  {
    data: {
      code: number;
      link: string | null;
      status: string;
    };
  }
export default async function Redirect(params:{
    params: {redirect: string}
}) {
    const redirectURI: Response  = await axios.get(`${process.env.API_LINK}/api/short?alias=${params.params.redirect}`)
    console.log(redirectURI)
    if (redirectURI.data.code === 404) { 
        return(
            <>
                <h1>there no redirect link for this</h1>
            </>
        )
    }
    return redirect(redirectURI.data.link as string)
}