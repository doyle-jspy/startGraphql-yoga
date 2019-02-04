const { GraphQLServer } = require('graphql-yoga')
const express = require('express');
const app = express();

const typeDefs = `
  type Query {
    name:String!
  }
`

const resolvers = {
  Query: {
    name : ()=>{ return "kim"}
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(3000,()=>{
    console.log(3000)
})