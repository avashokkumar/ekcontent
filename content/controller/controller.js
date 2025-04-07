
const axios = require('axios');

// Sample get Method
const getAll = (req, res) => {
    console.log('get ALL')
    res.status(200).json({message: "Get All Information"})
  }


// Route that makes a GET request to an external API
const getData =  async (req, res) => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await axios.get(url);
      // console.log('response', response.data)
      let contentData = response.data
      let filterContent = contentData.filter(function (data) {
       return  data.id === 9;
      })
      console.log('filterContent',filterContent)
      res.json(filterContent);
    } catch (error) {
      console.error('Error making GET request:', error.message);
      res.status(500).send('Internal Server Error');
    }
  };

  // Route that makes a GET request to an external API
const getInstafeeds =  async (req, res) => {
  try {
    const SITE_UUID = process.env.SITE_UUID;
    const API_KEY = process.env.API_KEY;
    console.log("SITE_UUID",SITE_UUID)
    console.log("API_KEY",API_KEY)
    const response = await fetch(
      `https://api.flockler.app/v2/${SITE_UUID}/posts`,
      {
        headers: {
          'X-FL-API-Key': API_KEY
        }
      }
    );
    const data = await response.json();
    console.log('response',response.status)
    if(response.status == 500)
      res.json("Internal Server Error");
     else {
      const posts = data?.posts
      // const filteredPosts = 
      res.json(posts)
     } 
  } catch (error) {
    console.error('Error making GET request:', error);
    res.status(500).send('Internal Server Error');
  }
};

  module.exports = { getAll, getData, getInstafeeds}    
