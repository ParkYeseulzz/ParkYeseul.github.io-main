import React from "react";

const skillText =[
    {
        title: "도전으로 나만의 세계를 창조하다.",
        desc: "나는 도전을 사랑하며, 새로운 환경과 문제를 마주칠 때마다 성장의 기회로 삼는다. 성공 여부는 중요하지 않다. 내가 얻는 교훈과 그 과정에서 느끼는 성취감이 나의 원동력이 된다. 도전을 시작하는 순간의 설렘과 에너지, 그리고 호기심이 한데 모여 예상치 못한 시너지를 만들어내는 경험은 나를 계속해서 앞으로 나아가게 한다. 지금 나는 코딩을 통해 무에서 유를 창조하는 즐거움을 느낀다. 단순한 코드 한 줄이 사람들의 삶에 영향을 줄 수 있는 가능성을 볼 때마다, 내 작업이 누군가에게 새로운 출발점과 영감을 제공하길 바라는 마음으로 작업에 임한다. 앞으로도 끊임없이 배우고, 도전하며 나만의 세계를 설계하고 확장해 나갈 것이다.",
      },
      {
        title: "성실함으로 길을 열어가는 사람",
        desc: "성실함과 책임감은 내가 가진 가장 큰 자산이다. 어떤 일이 주어지든 끝까지 해내려는 태도와 부지런함은 나의 정체성을 가장 잘 나타낸다. 문제가 닥쳤을 때 두려워하기보다, 배우고 성장할 수 있는 기회로 받아들인다. 해결 과정을 통해 얻는 경험은 나를 더 나은 사람으로 만들어주기 때문이다. 특히 새로운 것을 배우거나 복잡한 문제를 해결할 때 느끼는 성취감은 내가 이 일을 사랑하는 이유 중 하나다. 기술은 단순한 도구가 아니라, 나의 노력을 통해 가치를 창출하는 과정이라고 생각한다. 매 순간 책임감 있는 자세로 임하며, 도전을 통해 스스로를 성장시키고, 더 나은 결과를 만들어 가는 늘 깨어있는 사람이다."

,
      },
      {
        title: "몰입으로 가치 창조",
        desc: "나는 오타쿠 기질을 가진 몰입형 인간이다. 한 가지에 빠지면 끝을 볼 때까지 집중하며, 그 과정에서 얻는 깊이와 성취감이 나를 움직이게 한다. 이런 몰두하는 태도는 단순한 관심을 넘어, 내가 하는 모든 일에 진정성과 열정을 담을 수 있게 해준다. 작은 디테일까지 놓치지 않으려는 집념이 나만의 가치를 만들어간다고 믿는다. "
      },
];


// Skill 컴포넌트는 특정 기술 섹션을 렌더링합니다.
const Skill = () => {
    return (
        // 섹션 요소로, 페이지의 기술 부분을 정의합니다.
        <section id="skill">
            <div className="skill__inner"> {/* 기술 섹션의 내부 컨텐츠를 감싸는 div입니다. */}
                
                {/* 섹션 제목을 정의하는 h2 요소입니다. */}
                <h2 className="skill__title">
                    PR<em>박예슬을 3가지로 정의해보기</em>
                </h2>

                {/* 기술 설명을 포함하는 div입니다. */}
                <div className="skill__desc">
                    {/* skillText 배열을 순회하면서 각 기술 항목을 렌더링합니다. */}
                    {skillText.map((skill, key) => (
                        <div key={key}> {/* key 속성은 각 자식 요소를 고유하게 식별하는 데 사용됩니다. */}
                            <span>{key + 1}.</span> {/* 기술 항목의 번호를 출력합니다. */}
                            <h3>{skill.title}</h3> {/* 기술 항목의 제목을 출력합니다. */}
                            <p>{skill.desc}</p> {/* 기술 항목의 설명을 출력합니다. */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill; // Skill 컴포넌트를 모듈로 내보냅니다.