import Img1 from "../img/web.png";
import Img2 from "../img/web.png";
import Img3 from "../img/web.png";
import Img4 from "../img/web.png";
import Img5 from "../img/web.png";

import IconPS from "../icons/photoshop-original.svg";
import IconILL from "../icons/illustrator-original.svg";
import IconHTML from "../icons/html5.svg";
import IconCSS from "../icons/css3-original-wordmark.svg";
import IconJS from "../icons/javascript-original.svg";
import IconReact from "../icons/react-original.svg";
import IconJQ from "../icons/jquery-original-wordmark.svg";
import IconPHP from "../icons/php-original.svg";
import IconSQL from "../icons/mysql-plain-wordmark.svg";
import IconVUE from "../icons/vuejs-original.svg";
import IconFIGMA from "../icons/figma-original.svg";
import IconREACT from "../icons/react-original.svg";
import IconNEXTJS from "../icons/nextjs-original.svg";
import IconMONGO from "../icons/mongodb-original.svg";
import IconAWS from "../icons/amazonwebservices-original-wordmark.svg";
import IconGIT from "../icons/github-original.svg";

/* PC 프레임이미지(1,2공통) */
import FrameImg from "../img/web.png";
/* Mobile 프레임이미지 */
import MobileImg from "../img/mobile.png"
/* Tablet 프레임이미지 */
import TabletImg from "../img/tablet.png"

/* id:1 우리은행 */
import ContentImg1 from "../img/project2-2.png"; // 내용 이미지
/* id:2 국립세종도서관 */
import ContentImg2 from "../img/project1-3.png"; // 내용 이미지
/* id:3 시리즈업 */
import ContentImg3 from "../img/project3-1.png"
/* id:4 핀아 */
import ContentImg4 from "../img/project4.png"
/* id:5 가온 */
import ContentImg5 from "../img/project5.png" //가온 pc
import ContentImg5_2 from "../img/project5_m.png" //가온 mobile
import ContentImg5_3 from "../img/project5_t.png" //가온 tablet




export const projectData = [
    {
        id: 1,
        /*  number: "첫 번째 프로젝트", */
        title: "우리은행 웹사이트",
        period: "작업기간: 2주 | 개인 프로젝트 | 기여도 100%(기획, 디자인, 개발)",
        description:
            `    코딩을 처음 접한 후 제작한 첫 웹사이트입니다.코드 한 줄을 작성하고,
        레이아웃을 나누며, 아이콘 하나를 삽입하는 과정조차 쉽지 않았지만,
        완성 후 처음부터 끝까지 혼자 힘으로 사이트를 완성했다는 사실에 큰
            보람을 느꼈습니다.첫 프로젝트였기 때문에 기존 웹사이트를
            리모델링하는 방향으로 기획하였으며, 각 섹션마다 여러 사이트를
            벤치마킹하여 적합한 디자인 요소를 선별하고 조합함으로써 하나의
            완성도 높은 사이트로 통합할 수 있도록 디자인했습니다.우리은행의
            대표 색상인 블루를 메인 컬러로 사용했으며, 이용 연령대가 다양하고
            많은 사람들이 이용하는 금융권 웹사이트의 특성을 고려해 ‘깔끔함,
        신뢰, 직관성’을 핵심 키워드로 삼아 작업을 진행했습니다.`,
        frameImage: FrameImg,      // 외곽 프레임 이미지
        contentImage: ContentImg1,
        tools: [
            { id: "ps", name: "Photoshop", src: IconPS },
            { id: "ill", name: "Illustrator", src: IconILL },
            { id: "html", name: "HTML", src: IconHTML },
            { id: "css", name: "CSS", src: IconCSS },
        ],
        functions: [
            "이미지: CSS에 background 속성을 활용하여 첨부.",
            "동영상: HTML에 iframe 태그를 이용해 YouTube 등의 외부 사이트 영상을 임베드. ",
            "아이콘: 외부 라이브러리를 불러와 웹페이지에 바로 표시, CSS로 색상·크기·회전·애니메이션 스타일링",
        ],
        links: [
            { label: "메인", url: "https://yuriyuri01.github.io/woori/" },

        ],
    },

    {
        id: 2,
        /* number: "두 번째 프로젝트", */
        title: "국립세종도서관(관공서) 웹사이트",
        period: "작업기간: 4주 | 개인 프로젝트 | 기여도 100%(기획, 디자인, 개발)",
        description: `HTML과 CSS에 JavaScript와 jQuery를 추가하여 동적인 효과를 구현한 웹사이트입니다.CSS만으로는 표현하기 어려운 화려하고 다양한 애니메이션을 적용하며 사용자 경험을 향상시켰습니다.

도서관 웹사이트의 특성상 이용 가능한 도서 목록을 강조하기 위해 ‘도서 안내’ 섹션의 배경색을 달리해 시각적으로
눈에 띄도록 디자인했습니다. 또한 JavaScript 기반 Swiper 라이브러리를 활용해 동적인 슬라이드 기능을 구현
하여 해당 섹션을 더욱 강조했습니다. 

메인에는 검색 기능을 배치하고, 첫 번째와 두 번째 섹션에는 크고 직관적인 아이콘 메뉴를 배치해 이용자들이
온라인에서 도서 검색, 좌석 예약 등 서비스를 빠르고 편리하게 이용할 수 있도록 구성했습니다.
`,
        frameImage: FrameImg,      // 외곽 프레임 이미지
        contentImage: ContentImg2,  // 내용 이미지
        tools: [
            { id: "ps", name: "Photoshop", src: IconPS },
            { id: "ill", name: "Illustrator", src: IconILL },
            { id: "html", name: "HTML", src: IconHTML },
            { id: "css", name: "CSS", src: IconCSS },
            { id: "js", name: "JavaScript", src: IconJS },
            { id: "jq", name: "JQuery", src: IconJQ },
            { id: "php", name: "PHP", src: IconPHP },
            { id: "mysql", name: "MySQL", src: IconSQL }
        ],
        functions: [
            "슬라이드배너:JAVASCRIPT+jQUERY를 사용하여 배너이미지 자동슬라이드.",
            `회원가입/로그인, 게시판:
사용자가 <form> 태그를 통해 입력한 정보(회원가입 정보, 로그인 정보, 게시글 작성/수정/삭제 등)를 PHP 
서버로 전송.
PHP 서버는 MySQL 데이터베이스에 접속하여 사용자가 입력한 데이터를 저장, 로그인 시 입력한 
정보를 조회하여 인증,
게시글 수정 또는 삭제 시 기존 데이터를 업데이트 혹은 삭제.
`,
            "날씨: jQuery에서 외부사이트 날씨 API를 AJAX로 호출",
        ],
        links: [
            { label: "메인", url: "http://sejonglibrary.dothome.co.kr/index.php" },
            { label: "로그인", url: "http://sejonglibrary.dothome.co.kr/sejon_log/sejong_log6.php" },
            { label: "회원가입", url: "http://sejonglibrary.dothome.co.kr/sejon_log/sejong_signup2.php" },
            { label: "게시판", url: "http://sejonglibrary.dothome.co.kr/board_list_sejong.php" },
            { label: "찾아오시는길", url: "http://sejonglibrary.dothome.co.kr/map/map.html" },
        ],
    },

    {
        id: 3,
        /* number: "세 번째 프로젝트", */
        title: "시리즈업(SERIES UP) 어플리케이션",
        period: "작업기간: 4주 | 팀 프로젝트 | 기획50%, 디자인40%, 개발40%",
        description: `VUE.js로 UI 구조를 구현하고 JavaScript와 jQuery로 동적인 효과를 적용, PHP 백엔드를 이용해 리뷰 작성 기능을 연동한 ‘모바일 최적화 드라마 스트리밍 어플리케이션’입니다.
     영상 재생 사이트인 만큼 사용자가 오랜 시간 편안하게 머무를 수 있도록 어두운 배경 컬러를 적용했습니다. 또한, 'Top 10', 알고리즘 기반의 '취향 저격 Pick', '레트로' 등 추천 태그를 통해 콘텐츠 분류를 명확히 하여 사용자 탐색의 편의성을 높였습니다.
        저를 포함한 모든 팀원에게 첫 팀 프로젝트였기 때문에 초기에는 의견 조율과 역할 분담에 어려움이 따랐습니다. 이러한 문제를 해결하고자 프로젝트 중반부터는 소통 방식을 개선하고, 각자 맡은 부분을 명확히 공유했습니다. 그 결과 작업 간 중복을 방지하고, 코드 병합 시 충돌 없이 효율적으로 개발을 진행할 수 있었습니다. 이이 경험을 통해 동료들과의 원활한 소통 및 효율적인 의견 조율 방법을 배우게 되었으며, 그 덕분에 혼자서는 구현하기 어려운 수준의 프로젝트를 팀원들과 함께 성공적으로 완성할 수 있었습니다.
`,
        frameImage: MobileImg,      // 외곽 프레임 이미지
        contentImage: ContentImg3,
        isMobile: true,
        tools: [
            { id: "figma", name: "FIGMA", src: IconFIGMA },
            { id: "html", name: "HTML", src: IconHTML },
            { id: "css", name: "CSS", src: IconCSS },
            { id: "js", name: "JavaScript", src: IconJS },
            { id: "jq", name: "JQuery", src: IconJQ },
            { id: "php", name: "PHP", src: IconPHP },
            { id: "vue", name: "VUE", src: IconVUE }
        ],
        functions: [
            "LocalStorage: 즐겨찾는 영상(좋아요) 정보를 브라우저에 저장",
            "날씨 API: 외부(OpenWeather) API를 호출하여 현재 온도, 최고/최저 온도, 습도 및 날씨 아이콘 표시",
            "소셜로그인: Google/Kakao OAuth 2.0 SDK를 활용한 인증 방식",

        ],
        links: [
            { label: "메인", url: "http://teama.dothome.co.kr/#/HomeView" },
            { label: "로그인", url: "http://teama.dothome.co.kr/#/login" },
            { label: "소셜로그인", url: "http://teama.dothome.co.kr/#/SocialLogIn" },
            { label: "회원가입", url: "http://teama.dothome.co.kr/#/signup" },
            { label: "구독권 선택", url: "http://teama.dothome.co.kr/#/Subscribe" },
            { label: "구독권 결제", url: "http://teama.dothome.co.kr/#/Subscribe_basic" },
            { label: "결제완료", url: "http://teama.dothome.co.kr/#/complete" },
            { label: "프로필선택", url: "http://teama.dothome.co.kr/#/Profile_Select" },
            { label: "상세페이지1", url: "http://teama.dothome.co.kr/#/SERIES_UP_drama_detail" },
            { label: "상세페이지2", url: "http://teama.dothome.co.kr/#/SERIES_UP_drama_detail_1" },
            { label: "상세페이지3", url: "http://teama.dothome.co.kr/#/SERIES_UP_drama_detail2" },
            { label: "상세페이지4", url: "http://teama.dothome.co.kr/#/SERIES_UP_drama_detail3" },
            { label: "리뷰", url: "http://teama.dothome.co.kr/#/SERIES_UP_drama_review" },
            { label: "즐겨찾기", url: "http://teama.dothome.co.kr/#/myFavorite" },
            { label: "검색", url: "http://teama.dothome.co.kr/#/SearchPage" },
            { label: "더보기", url: "http://teama.dothome.co.kr/#/add" },
            { label: "마이페이지", url: "http://teama.dothome.co.kr/#/ProfilePage" },
        ],
    },

    {
        id: 4,
        /* number: "네 번째 프로젝트", */
        title: "핀아(PIN-A) 쇼핑몰 웹사이트",
        period: "작업기간: 4주 | 팀 프로젝트 | 기획40%, 디자인70%, 개발40%",
        description: `React를 기반으로 작업한 ‘식물 전문 온라인 쇼핑몰’입니다. 쇼핑몰 특성상 수익 위한 다수의 사용자 유도를 위해 ‘오늘의 꽃말 뽑기’라는 쿠폰 추첨 기능을 사용하여 결제 시 적용 가능하도록 구현하였으며, 검색 및 필터링 기능을 통해 원하는 특성의 제품만을 선별적으로 볼 수 있도록 제작하였습니다. 디자인 측면에서는 꽃과 식물의 생동감을 시각적으로 표현하기 위해 초록, 분홍, 갈색을 조합한 로고를 제작하고, 버터색을 배경색으로 사용하여 이용자에게 부드럽고 편안한 이미지를 각인시켰습니다. `,
        frameImage: FrameImg,      // 외곽 프레임 이미지
        contentImage: ContentImg4,  // 내용 이미지
        tools: [
            { id: "figma", name: "FIGMA", src: IconFIGMA },
            { id: "ps", name: "Photoshop", src: IconPS },
            { id: "html", name: "HTML", src: IconHTML },
            { id: "css", name: "CSS", src: IconCSS },
            { id: "js", name: "JavaScript", src: IconJS },
            { id: "react", name: "React", src: IconREACT },
            { id: "git", name: "Github", src: IconGIT }
        ],
        functions: [
            "지도/날씨/뉴스 API: 외부(Kakao, OpenWeather, NewsAPI) API를 호출하여 브라우저에 전송",
            "소셜로그인: Google/Kakao OAuth 2.0 SDK를 활용한 인증 방식",
            "LocalStorage: 회원가입/일반로그인 정보 저장 및 연동, 장바구니, 쿠폰, 결제, 챗봇, 마이페이지 정보 저장 및 연동, 게시판/리뷰댓글 정보 저장 및 연동",
            "검색: 메인 및 상세1,2 페이지에서 키워드 검색 시 일치하는 정보만 필터링하여 브라우저에 출력",
            "필터링: 가격대, 난이도, 크기에 따른 제품 필터링 기능"
        ],
        links: [
            { label: "메인", url: "https://yuriyuri01.github.io/pina" },
            { label: "회원가입", url: "https://yuriyuri01.github.io/pina/member" },
            { label: "상품페이지1", url: "https://yuriyuri01.github.io/pina/detail" },
            { label: "상품페이지2", url: "https://yuriyuri01.github.io/pina/detail2" },
            { label: "카테고리1", url: "https://yuriyuri01.github.io/pina/CategoryDetail" },
            { label: "카테고리2", url: "https://yuriyuri01.github.io/pina/CategoryDetail2" },
            { label: "장바구니", url: "https://yuriyuri01.github.io/pina/Cart" },
            { label: "메세지카드", url: "https://yuriyuri01.github.io/pina/MessageCard" },
            { label: "주문결제", url: "https://yuriyuri01.github.io/pina/payment" },
            { label: "결제완료", url: "https://yuriyuri01.github.io/pina/PaymentCompleted" },
            { label: "주문 내역", url: "https://yuriyuri01.github.io/pina/Orderlist" },
            { label: "이벤트", url: "https://yuriyuri01.github.io/pina/Lottery" },
            { label: "게시판", url: "https://yuriyuri01.github.io/pina/Community" },
            { label: "문의하기", url: "https://yuriyuri01.github.io/pina/qna" },
            { label: "마이페이지", url: "https://yuriyuri01.github.io/pina/mypage" },
        ],
    },

    {
        id: 5,
        /* number: "다섯 번째 프로젝트", */
        title: "가온(GAON) 온라인 교육 사이트",
        period: "작업기간: 3주 | 팀 프로젝트 | 기획40%, 디자인60%, 개발40%",
        description: `Next.js를 사용하여 UI를 구현하고 MongoDB로 데이터를 관리하는‘반려견 보호자 및 애견 관련 자격증 취득 희망자들을 위한 온라인 교육 사이트’입니다. 이용자들이 사이트를 이용하는데 있어서 혼란을 줄이기 위해 반려견 교육 페이지와 자격증 취득을 위한 페이지 별로 메인 컬러를 다르게 사용하였습니다. 반응형 디자인을 적용하여 다양한 디바이스에서도 적용되도록 하기 위해 매끄러운 분기점 변경을 위해 신경 쓸 디테일이 많았던 점, React에서 NEXT.js로 변환하는 과정, AWS에 배포하는 과정에서 많은 어려움이 따랐지만 팀원들과 효율적으로 분업하여 시간 내 제작을 완료할 수 있었습니다.`,
        frameImage: FrameImg,      // 외곽 프레임 이미지
        contentImage: ContentImg5,  // 내용 이미지

        // 화면별 이미지 추가
        screens: {
            mobile: {
                frameImage: MobileImg,       // 모바일 외곽 프레임
                contentImage: ContentImg5_2,   // 모바일 내용 이미지
                width: 320,
                height: 640
            },
            tablet: {
                frameImage: TabletImg,  // 태블릿 외곽 프레임
                contentImage: ContentImg5_3,   // 태블릿 내용 이미지
                width: 768,
                height: 1024
            }
        },
        tools: [
            { id: "figma", name: "FIGMA", src: IconFIGMA },
            { id: "ps", name: "Photoshop", src: IconPS },
            { id: "html", name: "HTML", src: IconHTML },
            { id: "css", name: "CSS", src: IconCSS },
            { id: "js", name: "JavaScript", src: IconJS },
            { id: "react", name: "React", src: IconREACT },
            { id: "nextjs", name: "Next.js", src: IconNEXTJS },
            { id: "mongo", name: "MongoDB", src: IconMONGO },
            { id: "amazon", name: "Amazon Web Services", src: IconAWS },
        ],
        functions: [
            "지도 / 날씨 API: 외부(Kakao, OpenWeather) API를 호출하여 브라우저에 전송",
            "소셜로그인: Google/Kakao OAuth 2.0 SDK를 활용한 인증 방식",
            "LocalStorage: 회원가입/일반로그인 정보 저장 및 연동, 장바구니, 쿠폰, 결제, 챗봇, 일정관리, 마이페이지 정보 저장 및 연동, 게시판/리뷰댓글 정보 저장 및 연동",
            "검색: 메인 및 상세1,2 페이지에서 키워드 검색 시 일치하는 정보만 필터링하여 브라우저에 출력"
        ],
        links: [
            { label: "메인", url: "https://vercel-gaon.vercel.app/" },
            { label: "로그인", url: "https://vercel-gaon.vercel.app/login" },
            { label: "소셜로그인", url: "https://vercel-gaon.vercel.app/login" },
            { label: "회원가입", url: "https://vercel-gaon.vercel.app/members" },
            { label: "커뮤니티", url: "https://vercel-gaon.vercel.app/Community_list" },
            { label: "카테고리1", url: "https://vercel-gaon.vercel.app/category1" },
            { label: "카테고리2", url: "https://vercel-gaon.vercel.app/category2" },
            { label: "상세페이지", url: "https://vercel-gaon.vercel.app/class1" },
            { label: "장바구니", url: "https://vercel-gaon.vercel.app/cart2" },
            { label: "결제페이지", url: "https://vercel-gaon.vercel.app/PaymentPage" },
            { label: "결제완료", url: "https://vercel-gaon.vercel.app/PaymentPage" },
            { label: "마이페이지", url: "https://vercel-gaon.vercel.app/mypage" },
            { label: "챗봇/캘린더", url: "https://vercel-gaon.vercel.app/" },
            { label: "매칭테스트", url: "https://vercel-gaon.vercel.app/match" },
        ],
    },
];
