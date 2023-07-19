import axios from 'axios';


export default axios.create({
    
      baseURL:'https://api.unsplash.com',
      headers:{
           Authorization: 'Client-ID isJ97Cpy9SA5cEmbp_53rz4XpSvenlOnrmS1ASfAI_4'
      }
});