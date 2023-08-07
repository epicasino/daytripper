import { CookiesProvider } from "react-cookie";
import jwt from "jwt-decode";

function Auth() {

//initialize cookies
const cookies = new Cookies();
//initiaize user state
const [user, setUser] = useState(null);

const logout = () => {
    setUser(null);
    cookies.remove("jwt_authorization");
};

const login = (jwt_token) => {
//decode JWT token
    const decoded = jwt(jwt_token);
//set user state
    setUser(decoded);
//set cookies
    cookies.set("jwt_authorization", jwt_token, {
        expires: new Date(decoded.exp * 1000),
    });
};

return (
    <div className="App">
        {user && (
            <div>
                <h1>Welcome {user.first_name}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        )}
        {!user && (
            <div>
                <h1>Welcome Traveller!</h1>
                <button onClick={() =>
                    login(
                        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5MTM2NDE4NCwiaWF0IjoxNjkxMzY0MTg0fQ.JDNFceh4vqPq7v25NNJBT747Uv9FgQeBEYYhpE19SgM"
                    )
                }>
                    Login
                </button>
            </div>
        )}
    </div>
);
}

export default Auth;