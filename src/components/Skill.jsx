import React from "react";
import profileImage from "../assets/img/profile.png"; // 이미지 경로를 import
const skillText =[
        {
            title: "교육 이수",
            desc: `자바(JAVA)활용 데이터 플랫폼 구축 풀스택 개발자 과정
    2024-06-17 ~2024-12-10
    - 프로그램 기초 문법
    1. JAVA개발환경 구축
    2. 자바 기본문법
    프론트 엔드 개발
    1. HTML5 2. CSS 3. JavaScript 4. jQuery
    - 반응형 UI
    1. 리액트(React) 개발 환경 갖추기
    2. 스타일링
    3. 애니메이션
    4. 내비게이션
    5. 서버와 API 통신
    6. 리덕스 이해하기
    - 백 엔드 개발Ⅰ
    1. 객체지향 프로그래밍
    2. 예외처리
    3. 자바 주요 클래스
    4. 스레드/입출력/네트워킹
    - 백 엔드 개발Ⅱ
    1. Oracle 개발환경 구축
    2. 데이터베이스 구성객체
    3. SQL문장/함수
    4. Join과 SubQuery
    5. 엔터티 및 속성
    6. 정규화, 반정규화, 통합, 관계
    7. 개념, 논리, 물리 모델링
    - 공공데이터 활용
    1. 공공데이터API 이해하기
    2. 공공데이터API 분석하기
    3. 공공데이터API 적용하기
    - 클라우드 서버
    1. 리눅스(우분투) 환경 구축
    2. 도커(Docker) 이해하기
    3. 도커 컨테이너 기술 활용
    4. 네트워킹/데이터 연동
    - 백 엔드 개발Ⅲ
    1. 서버프로그램 구현
    2. 프레임워크(Spring)활용
    3. Git 활용`,
        },
      
    {
        title: "스킬",
        desc: `JAVA
- 자바 문법 습득
- JDBC 개념 이해 및 데이터베이스와 연동
- GUI에 대한 이해와 AWT 활용
- 이벤트의 개념과 이벤트 처리 방식의 이해 및 활용 가능
- 간단한 계산기 및 달력 구현
JSP
- Model1 / Model2 기반 개발
- Java Bean을 활용, Set/Get 메소드를 이용해 DB와 연동하여 DB 입출력
- JSTL & EL 표현식 활용
Thymeleaf
- Set/Get 메소드를 이용해 DB와 연동하여 DB 입출력
- EL 표현식 활용
CSS
- 기초 UI 설계 및 기본 문법 습득
JavaScript (VanillaJS)
- VanillaJS 자바스크립트 기본 문법 습득
- JQuery 및 AJax 문법 습득
ReactJS
- ReactJS 라이프사이클 원리 이해
- React Class 및 Function형 컴포넌트 이해 및 설계 가능
- props, context, Redux 문법 습득 및 사용 가능
- Axios 비동기 통신 문법 습득 및 사용 가능
[ DBMS ]
Oracle 18C | 11g | MySQL
- DB 설치 및 기본 SQL 작성
- DB 모델링 기법 및 정규화
- 트랜잭션의 개념과 처리 방법과 PL/SQL 작성
[ Framework ]
Spring MVC
- 어노테이션 기반 Controller 구현 가능
- Spring MVC 패턴 이용 WebApp 제작`,
    },
      {
        title: "기술 자격증",
        desc: " "
      },
];


const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    <em>About</em>
                </h2>
               
                {/* 이미지 영역 */}
                <div className="skill__image">
                    <img src={profileImage} alt="Profile" />
                </div>


                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key} className="skill__item">
                            <span>{key + 1}.</span>
                            <h3>{skill.title}</h3>
                            {/* desc를 줄바꿈 처리 */}
                            <p>
                                {skill.desc.split("\n").map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line.trim()}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill; // Skill 컴포넌트를 모듈로 내보냅니다.
