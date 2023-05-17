import { useGithubUser } from "./UseGithub";
import useGithubUser2 from "./UseGithub2";
function GithubUser(props) {
    const data = useGithubUser2(props.username)

    return <>
            <div>
                {data && <a href={data.html_url}><h1>{data.login}</h1></a> || <p>LOADING...</p>}
            </div>
        </>
}

export default GithubUser;