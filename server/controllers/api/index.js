require('dotenv').config();

const router = require('express').Router();

router.get('/placeDetails/:placeId', async (req, res) => {

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.placeId}&fields=formatted_address,name,website,rating,geometry,url&key=${process.env.GOOGLE_MAPS_API_KEY}`
  ).then((data) => data.json());

  return res.status(200).json(response);
});

module.exports = router;
