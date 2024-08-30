import React, {useEffect, useState} from 'react';

const SuggestionVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchRecommendedVideos = async () => {
          try {
            const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCcxw9XZzthzPG8PE3HjrTTgFtytAz-A0I");
            const data = await response.json();
              setVideos(data.items);
          } catch (error) {
            console.error('Error fetching recommended videos:', error);
          }
        };
      
        fetchRecommendedVideos();
      }, []);

      return (
        <div className="w-1/3 ml-5">
          <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video.id} className="mb-4 w-96 h-28 flex  ">
                <img
                  src={video.snippet.thumbnails.high.url} 
                  alt={video.snippet.title}
                  className="  rounded mr-4" 
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">{video.snippet.title}</p>
                  <p className="text-xs text-gray-600">{`${video.statistics.viewCount} views`}</p>

                </div>
               </div>
            ))
          ) : (
            <p>No recommended videos available.</p>
          )}
        </div>
      );
    };
export default SuggestionVideos;
