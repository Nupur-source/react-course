import React from 'react';

function Course() {
  return (
    <a href="./courses-inner.html">
    <div class="shadow px-4 py-5 border-b-4 border-gray-800 md:max-w-sm md:mr-5 mb-6  ">
      <h5 class="mb-2 text-sm text-gray-600">Finance</h5>
      <h3 class="font-medium text-gray-900 mb-3">
        Fundamentals of Investment Banking
      </h3>
      <p class="text-gray-600 text-sm">
        Explores the introductory areas of investment banking in the
        modern day and age
      </p>
      <ul class="mt-5">
        <li class="text-gray-600 flex items-center text-xs mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
            height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </svg>
          <span class="mx-2">|</span>
          <p>3 hours, 30 minutes</p>
        </li>
        <li class="text-gray-600 flex items-center text-xs mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16 5v4a1 1 0 0 0 1 1h4" />
            <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
          </svg>
          <span class="mx-2">|</span>
          <p>3 modules</p>
        </li>
        <li class="text-gray-600 flex items-center text-xs mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
            height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <rect x="8" y="15" width="2" height="2" />
          </svg>
          <span class="mx-2">|</span>
          <p>17 Aug - 19 Sept</p>
        </li>
      </ul>
      <div class="mt-10 flex items-center">
        <div class="h-8 w-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_4.png" alt=""
            class="h-full w-full rounded-full overflow-hidden shadow" />
        </div>
        <div class="ml-2">
          <h5 class="text-xs text-gray-800">Jason Borne</h5>
          <p class="text-xs text-gray-600">Investment Banker</p>
        </div>
      </div>
    </div>
  </a>
  );
}

export default Course;
