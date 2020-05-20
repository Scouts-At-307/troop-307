// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const imageType = require('image-type')
const imageDownload = require('image-download')
const _ = require('lodash')

const server = 'http://gallery-troop.scoutsat307.org';

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios({
      method: 'post',
      url: server + '/api/Album::get',
      data: {
        "function": "Album::get",
        "albumID": "f"
      },
      headers: {
        'Authorization': 'b39e3b7c-2909-4e6b-83a9-5b9ad2619ecd'
      },
    });
    const starredPhotos = actions.addCollection('StarredPhotos');

    // Download Images
    const downloadImage = async function(imageSource, targetPath) {
      return await imageDownload(imageSource).then(buffer => {

        const hash = crypto.createHash('sha256');
        hash.update(imageSource);
        var targetFileName = hash.digest('hex');
        
        const type = imageType(buffer);
        
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath)
        }

        const filePath = path.resolve(
          targetPath, 
            `${targetFileName}.${type.ext}`
        )

        fs.writeFile(filePath, buffer, (err) => console.log(err ? err : 'Image Download Succeeded'));
        return filePath;
      });
    };
    
    for (const photo of data.photos) {
      let downloadedImage = await downloadImage(server + '/' + photo.url, './src/assets/starred-photos')

      starredPhotos.addNode({
        id: photo.id,
        height: photo.height,
        width: photo.width,
        imageSrc: server + '/' + photo.url,
        image: downloadedImage
      })
    };

  })
}
