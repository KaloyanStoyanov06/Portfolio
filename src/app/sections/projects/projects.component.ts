import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.type';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { NgFor } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [NgFor, ProjectCardComponent]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: "ReportR",
      description: "ReportR is an innovative app that provides a practical solution to the everyday challenges faced by large organizations, such as schools and businesses. The app aims to simplify the process of managing and resolving issues that can arise in these organizations, making it easier for them to maintain a smooth and efficient operation by user contribution. I gained valuable skills in teamwork, coordination, and adaptability.",
      downloadFileLink: "",
      github: "https://github.com/kaloyanstoyanov06/reportr",
      imageUrl: "https://github.com/KaloyanStoyanov06/reportr/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
      startToEnd: "04/2023",
      images: [
        "assets/projects/ReportR/1.webp",
        "assets/projects/ReportR/8.webp",
        "assets/projects/ReportR/2.webp",
        "assets/projects/ReportR/3.webp",
        "assets/projects/ReportR/4.webp",
        "assets/projects/ReportR/5.webp",
        "assets/projects/ReportR/6.webp",
        "assets/projects/ReportR/7.webp",
        "assets/projects/ReportR/9.webp",
        "assets/projects/ReportR/10.webp",
        "assets/projects/ReportR/11.webp",
      ],
    },
    {
      name: "EducateIO",
      description: "EducateIO is a cutting-edge mobile application built on the Flutter framework, designed to revolutionize the way individuals find teachers and learn specific subjects. Whether you're a student seeking personalized education or a private tutor who looks to advertise themselves to more students, Another notable feature of the platform is its facilitation of student collaboration and the exchange of knowledge between students. Throughout my experience, I also acquired practical expertise in utilizing Firebase, specifically its authentication and Firestore functionalities, complementing my proficiency in leveraging Android APIs and Google Maps APIs to create feature-rich mobile applications with intuitive interfaces and advanced mapping functionalities.",
      downloadFileLink: "",
      github: "https://github.com/KaloyanStoyanov06/educate_io",
      imageUrl: "https://github.com/KaloyanStoyanov06/educate_io/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
      startToEnd: "12/2022 - 02/2023",
      images: [
        "assets/projects/EducateIO/10.webp",
        "assets/projects/EducateIO/7.webp",
        "assets/projects/EducateIO/3.webp",
        "assets/projects/EducateIO/4.webp",
        "assets/projects/EducateIO/1.webp",
        "assets/projects/EducateIO/2.webp",
        "assets/projects/EducateIO/5.webp",
        "assets/projects/EducateIO/6.webp",
        "assets/projects/EducateIO/8.webp",
        "assets/projects/EducateIO/9.webp",
        "assets/projects/EducateIO/11.webp",
        "assets/projects/EducateIO/12.webp",
        "assets/projects/EducateIO/13.webp",
        "assets/projects/EducateIO/14.webp",
      ],

    },
    {
      name: "School Program",
      description: "This mobile application is developed using the Flutter framework and utilizes local storage to store program data. It enables users to conveniently schedule recurring programs from Monday to Friday and set reminders for homework and tests. It's extremely useful for students and teachers. I developed proficiency in utilizing local storage and saving settings within the mobile application, optimizing user experience and data management.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://github.com/KaloyanStoyanov06/school_program/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
      startToEnd: "09/2022",
      images: [
        "assets/projects/School/1.webp",
        "assets/projects/School/2.webp",
        "assets/projects/School/3.webp",
        "assets/projects/School/4.webp",
        "assets/projects/School/5.webp",
        "assets/projects/School/6.webp",
        "assets/projects/School/7.webp",
        "assets/projects/School/8.webp",
      ],
    },
    {
      name: "CharGO",
      description: "CharGO is a mobile app that aims to revolutionize the way users find and reserve electric car chargers.With a user- friendly interface, CharGO simplifies the process of locating and booking charging stations, providing a seamless experience for electric vehicle owners. I developed the ability to construct and present innovative ideas effectively.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://camo.githubusercontent.com/b9b0ac02657b31fabe92e3240e8eb7278c7ade3879fdd7879eabdd16b345b42d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313039303434353336303835393732353836342f313131343439323333393932333230363135342f63686172676f5f6e6f5f62672e706e67",
      startToEnd: "06/2023",
      images: [
        "assets/projects/CharGO/6.webp",
        "assets/projects/CharGO/2.webp",
        "assets/projects/CharGO/1.webp",
        "assets/projects/CharGO/3.webp",
        "assets/projects/CharGO/4.webp",
        "assets/projects/CharGO/5.webp",
      ],
    },

  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#project-wrapper",
          start: "top center",
          end: "+=300",
          scrub: 1,

        },
      });

      tl
        .fromTo("#project-title", { opacity: 0, duration: 1, y: 300, }, { opacity: 1, duration: 1, y: 0, }, 0);
    }, 0)
  }
}
