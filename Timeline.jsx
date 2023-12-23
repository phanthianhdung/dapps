import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import roadmap from "../../images/roadmap.png";

const Timeline = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <div className="flex flex-[0.5] justify-center items-center">
        <img src={roadmap} alt="logo" className="w-45" />
        </div>
        
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Roadmap</h1>
        <h1 class="justify-center items-center gradient-bg-services text-3xl text-center font-bold text-blue-500">2023</h1>
      </div>
      
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
       
        <div className="flex-1 flex flex-col justify-start items-center">
          
          <div class="border-l-2 mt-10">
          
            {/* Card 1 */}
            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              
              <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              
              <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

              
              <div class="flex-auto">
                <h1 class="text-lg">Q1/2023</h1>
                <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                <h3>Classroom</h3>
              </div>
              <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
            </div>

            {/* Card 2 */}
            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              
              <div class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              
              <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

              
              <div class="flex-auto">
                <h1 class="text-lg">Q2/2023</h1>
                <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                <h3>Classroom</h3>
              </div>
              <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
            </div>

            {/* Card 3 */}
            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* Dot Follwing the Left Vertical Line */}
              <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              {/* Line that connecting the box with the vertical line */}
              <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

              {/* Content that showing in the box */}
              <div class="flex-auto">
                <h1 class="text-lg">Q3/2023</h1>
                <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                <h3>Classroom</h3>
              </div>
              <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
            </div>

            {/* Card 4 */}
            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              {/* Dot Follwing the Left Vertical Line */}
              <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              {/* Line that connecting the box with the vertical line */}
              <div class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

              {/* Content that showing in the box */}
              <div class="flex-auto">
                <h1 class="text-lg">Q4/2023</h1>
                <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                <h3>Classroom</h3>
              </div>
              <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
            </div>

            {/* Card 5 */}
            <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
              {/* Dot Follwing the Left Vertical Line */}
              <div class="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

              {/* Line that connecting the box with the vertical line */}
              <div class="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

              {/* Content that showing in the box */}
              <div class="flex-auto">
                <h1 class="text-lg">Q1/2024</h1>
                <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                <h3>Classroom</h3>
              </div>
              <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  </div>
  );

  export default Timeline;