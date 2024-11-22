import express from "express";
// import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsRoutes.js";

// console.log(process.env.STRING_CONEXAO)
// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// const posts = [
//     {
//         id: 1,
//         descricao: "Foto de gatinho",
//         imagem: "https://placecats.com/millie/300/150"
//       },
//       {
//         id: 2,
//         descricao: "Paisagem montanhosa",
//         imagem: "https://picsum.photos/seed/mountains/300/200"
//       },
//       {
//         id: 3,
//         descricao: "Cachorro brincando na praia",
//         imagem: "https://placedog.net/300/200"
//       },
//       {
//         id: 4,
//         descricao: "Comida deliciosa!",
//         imagem: "https://source.unsplash.com/random/300x200/?food"
//       },
//       {
//         id: 5,
//         descricao: "Arte Abstrata",
//         imagem: "https://source.unsplash.com/random/300x200/?abstract"
//       }
//     ];

const app = express();
// app.use(express.json());
routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// async function getTodosPosts(){
//   const db = conexao.db("imersao-back-instalike")
//   const colecao = db.collection("posts")
//   return colecao.find().toArray()

// }

// app.get("/posts", async (req, res) => {
//   const posts = await getTodosPosts()
//   res.status(200).json(posts);
// });

// function buscarPostPorID(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });