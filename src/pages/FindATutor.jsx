import React, { useState } from "react";
import { styled } from "styled-components";
import TutorImage from "../assets/Undefined.jpg";

const tutors = [
  {
    name: "Rodrigo Cobaleda",
    subject: "Spanish",
    price: "15",
    aboutMe:
      "I am an experienced language tutor with a unique background. Originally from Spain, I immigrated to the United States and learned multiple languages through self-study and immersion. Despite facing challenges as an undocumented immigrant, I was determined to pursue my passion for teaching languages. Over the years, I have honed my teaching skills and developed effective strategies to help students learn and improve their language abilities. My personal journey has given me a deep understanding of the struggles and triumphs that come with learning a new language, and I am committed to providing a supportive and inclusive learning environment for all my students. Whether you're looking to improve your Spanish, English, or French skills, I am here to guide you on your language learning journey.",
    skills: "Spanish, English, French",
  },
  {
    name: "John Doe",
    subject: "Math",
    price: "20",
    aboutMe:
      "I am a dedicated and experienced math tutor with a passion for helping students succeed. I have a strong background in mathematics and hold a degree in Mathematics Education. With over 5 years of tutoring experience, I have helped numerous students improve their math skills and achieve their academic goals. My teaching approach focuses on building a solid foundation of mathematical concepts and problem-solving skills.",
    skills: "Math, Science, English",
  },
  {
    name: "Jane Smith",
    subject: "English",
    price: "18",
    aboutMe:
      "I am a patient and dedicated English tutor with a passion for helping students improve their language skills. I have a Bachelor's degree in English Literature and have been teaching English for over 3 years. I believe in creating a supportive and engaging learning environment to help students build their confidence and achieve their goals. My teaching approach focuses on developing strong reading, writing, and communication skills.",
    skills: "English, Literature, Writing",
  },
  {
    name: "Sarah Johnson",
    subject: "Science",
    price: "25",
    aboutMe:
      "I am an experienced Science tutor with a background in Biology and Chemistry. I hold a Master's degree in Biology and have been teaching Science for over 5 years. I am passionate about making Science accessible and engaging for students. I believe in hands-on learning and use experiments and real-life examples to help students understand complex scientific concepts. My goal is to inspire curiosity and foster a love for Science in my students.",
    skills: "Biology, Chemistry, Physics",
  },
  {
    name: "Michael Brown",
    subject: "History",
    price: "22",
    aboutMe:
      "I am a knowledgeable and enthusiastic History tutor with a deep understanding of various historical periods and events. I have a Bachelor's degree in History and have been teaching History for over 4 years. I believe in making History come alive for students by connecting past events to present-day issues. I use a combination of lectures, discussions, and multimedia resources to engage students and help them develop critical thinking and analytical skills.",
    skills: "World History, American History, European History",
  },
  {
    name: "Emily Davis",
    subject: "Math",
    price: "20",
    aboutMe:
      "I am a dedicated and experienced math tutor with a passion for helping students succeed. I have a strong background in mathematics and hold a degree in Mathematics Education. With over 5 years of tutoring experience, I have helped numerous students improve their math skills and achieve their academic goals. My teaching approach focuses on building a solid foundation of mathematical concepts and problem-solving skills.",
    skills: "Math, Algebra, Geometry",
  },
  {
    name: "David Wilson",
    subject: "Computer Science",
    price: "30",
    aboutMe:
      "I am a computer science professional with expertise in programming and software development. I have a Master's degree in Computer Science and have been working in the industry for over 7 years. I am passionate about teaching and sharing my knowledge with aspiring programmers. I specialize in languages such as Java, Python, and JavaScript, and can help students with coding assignments, algorithm design, and software development projects.",
    skills: "Java, Python, JavaScript",
  },
];

export default function FindATutor() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTutors = tutors.filter((tutor) => {
    return (
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
<<<<<<< HEAD
=======
      <NavigationBar />
>>>>>>> a7c3c4c67ea75433fda0ec69e020720c74b776be
      <StyledDiv>
        <h1>Find A Tutor</h1>
        <h2>Search for a tutor by name, subject, or price</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        ></input>
        <button>Search</button>
        <h2>Or browse our tutors below</h2>
        <br />
        <br />

        {filteredTutors.map((tutor, index) => (
          <>
          <TutorLayout key={index}>
            <StyledTutorImage src={TutorImage} />
            <StyledText>
              <StyledMainText>Name: {tutor.name}</StyledMainText>
              <StyledMainText>Subject: {tutor.subject}</StyledMainText>
              <StyledMainText>Price: £{tutor.price}/hr</StyledMainText>
              <div>
                <StyledMainText>
                  <br />
                  My Skills: {tutor.skills}
                </StyledMainText>
                <StyledMainText>
                  <br />
                  About Me: {tutor.aboutMe}
                </StyledMainText>
              </div>
            </StyledText>
          </TutorLayout>
        <br />
        <br />
        </>
        ))}
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  padding: 50px;
`;

const TutorLayout = styled.div`
  display: flex;
  border: 5px solid rgba(0, 150, 250, 1);
  border-radius: 25px;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  background-color: aliceblue;
`;

const StyledTutorImage = styled.img`
  height: 200px;
  border-radius: 50%;
`;

const StyledText = styled.p`
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 20px;
`;

const StyledMainText = styled.div``;
