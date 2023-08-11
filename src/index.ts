require('dotenv-safe').config(); 
import express from "express"
import { __prod__, authenticationProvider, dummySnippets } from "./constants";
import passport from "passport";
import cors from 'cors';
const main = async () => {

const app = express();

passport.serializeUser((user: any, done)=>{
    done(null, user.accessToken);
});

app.use(cors({ origin: "*"}))
app.use(passport.initialize());

/* DB connection part */
// const conn = await createConnection({
//     type: 'posgres' ,
//     //['postgres','sql',...],  
//     database: '< db_name >',
//     username: '< user_name >',
//     password: '< password >',
//     entities: [join(__dirname, './entities/*.*')],
//     logging: !__prod__,
//     syncronize: !__prod__,
// })

app.get('/auth/github', passport.authenticate(authenticationProvider.GITHUB, {session: false}));

app.get(
    '/api/auth',
    passport.authenticate(authenticationProvider.GITHUB, {failureRedirect: "./login", session: false},),
    (req: any, res) => {
        // res.send(req.user);
        // remains same in production also, 
        res.redirect(`http://localhost:54321/auth/${req.user.accessToken}/${req.user.profile.username}`);
    }
)

app.get("/", (_req, res)=>{
    res.send("hello")
})

app.get("/gists", async (req, res) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        // TODO: handle this gracefully
        res.send('<h1>Not authorized or no token</h1>');
        return;
    }
    if(authHeader){
        try{
            res.send(dummySnippets);
            return;
        }catch(error){
            // TODO: handle this gracefully
            console.error('Error in getting gists');
        }
    }
})

app.listen(3002, ()=>{
    console.log('Listening on localhost:3002')
})
}
main();
