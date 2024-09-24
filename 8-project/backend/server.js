const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("Server is ready");
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
          id: 1,
          title: "Math Joke",
          content: "Why was the equal sign so humble? Because he knew he wasn’t less than or greater than anyone else."
        },
        {
          id: 2,
          title: "Computer Joke",
          content: "Why do programmers prefer dark mode? Because the light attracts bugs!"
        },
        {
          id: 3,
          title: "Animal Joke",
          content: "Why don’t seagulls fly over the bay? Because then they’d be called bagels!"
        },
        {
          id: 4,
          title: "Music Joke",
          content: "Why did the musician bring a ladder to the concert? To reach the high notes!"
        },
        {
          id: 5,
          title: "Pencil Joke",
          cotent: "Why did the pencil break up with the sharpener? It was just too much pressure!"
        }
      ];
    res.send(jokes);
      
})

const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});

