var store = [{
        "title": "블로그 시작!",
        "excerpt":"GitHub Blog 서비스인 github.io 블로그 시작하며…   YFM에서 정의한 제목을 이중 괄호 구문으로 본문에 추가할 수 있다. 이 글의 제목은 블로그 시작!이고 마지막으로 수정된 시간은 2021-09-04 08:06:00 -0500이다.  ","categories": ["test"],
        "tags": ["test"],
        "url": "/test/first-post/",
        "teaser": null
      },{
        "title": "컴퓨터 그래픽스 개요",
        "excerpt":"컴퓨터 그래픽스의 발전 1950년대와 1960년대 1950 년대 초 Line printer, Teletype CRT Monitor (MIT의 Whirlwind 컴퓨터) 1963 Sketchpad drawing system : Ivan Sutherland (MIT) Modern interactive graphics의 시초 CRT(Vector Display Monitor, Random-Scan Monitor), Light pen, Command button 1960 년대 말 DVST(Divert View Storage Tube)를 이용한 CAD시스템, Tektronix 4010 1970 년대...","categories": ["Computer Graphics"],
        "tags": [],
        "url": "/computer%20graphics/CG-1/",
        "teaser": null
      },{
        "title": "[open GL] 사각형 그리기",
        "excerpt":"사각형 그리기 기본 예제   #include&lt;gl/freeglut.h&gt;  GLvoid drawScene(GLvoid);  int main() { \tglutInit(&amp;__argc, __argv); \tglutInitDisplayMode(GLUT_SINGLE | GLUT_RGBA); \tglutInitWindowPosition(100, 100); \tglutInitWindowSize(500, 500); \tglutCreateWindow(\"Example\"); \tglutDisplayFunc(drawScene); \tglutMainLoop(); }  GLvoid drawScene(GLvoid) { \tglClearColor(0.0f, 0.0f, 1.0f, 1.0f); \tglClear(GL_COLOR_BUFFER_BIT); \tglColor4f(0.0f, 1.0f, 0.0f, 1.0f); \tglRectf(-0.9f, -0.9f, 0.0f, 0.0f); \tglFlush(); }  ","categories": ["Computer Graphics"],
        "tags": [],
        "url": "/computer%20graphics/CG-2/",
        "teaser": null
      },{
        "title": "데이터 베이스 개론",
        "excerpt":"데이터와 정보 보통 일상생활에서는 데이터와 정보를 구별하지 않고 사용한다. 데이터(data또는 자료) 현실 세계에서 관찰 또는 수집의 결과로 나타난 객관적 사실(fact) 획득된 그대로의 정량적 혹은 정성적 실제 값(value) 정보(information) 획득된 데이터에 의미를 부여하거나 가공 처리를 통해 의사 결정(decision making)에 활용하도록 체계적으로 조직한 결과물을 말한다. 가공 처리 : 간단한 데이터 조건 검색,...","categories": ["Data Base"],
        "tags": [],
        "url": "/data%20base/DB-1-1/",
        "teaser": null
      },{
        "title": "DB 프로젝트 개요",
        "excerpt":"목표 DATABASE를 이용하는 간단한 웹사이트를 구축하는 것을 목표로 한다. 아직 html, java script, server, database를 알지 못하거나 활용이 미숙한 상태로 이러한 프로젝트를 통하여 프론트와 백의 상호작용을 통하여 어떤 작동방식으로 서비스가 구현되는지 알아보고자 한다. 따라서 다음과 같은 세부 목표를 달성해야 할 것으로 생각한다. 서비스를 위하여 html, java script를 이용한 웹페이지 구축...","categories": ["Data Base","Data project"],
        "tags": [],
        "url": "/data%20base/data%20project/DB-project/",
        "teaser": null
      },{
        "title": "까먹을 때쯤 쳐다보는 MySQL 기초",
        "excerpt":"MySQL 본질 데이터베이스의 기능이 방대하게 존재하며 이는 데이터와 관련되서 일어날 수 있는 일이 많기 때문이다 그러나 복잡한 기술도 그 중심에 자리잡고있는 핵심은 복잡하지 않다. 데이터베이스의 본질을 생각하였을 때 데이터를 어떻게 입력과 출력이 이뤄지는지가 중요한 본질이라고 생각할 수 있다. 여기서 입력은 다시 생성, 수정, 삭제로 나눌 수 있어 데이터베이스가 가져야하는 기본적인...","categories": ["Data Base"],
        "tags": [],
        "url": "/data%20base/DB/",
        "teaser": null
      },{
        "title": "소프트웨어 공학 소개",
        "excerpt":"소프트웨어 공학 소개 SE 정의 = 고품질의 SW를 개발 및 관리하기 위한 체계적인 방법론 개발차원과 관리차원 모드를 이야기한다. SE 학문의 탄생 배경 H/W와 S/W의 발전 차이로 인한 소프트웨어 위기 인식 H/W : 급속 발전, 체계화, 자동화로 인하여 생산성이 높다. S/W : 특성상 인간개입이 불가피하며 인간의 능력에 따라서 성능이 상이하기 때문에...","categories": ["Software Engineering"],
        "tags": [],
        "url": "/software%20engineering/SE-1/",
        "teaser": null
      },{
        "title": "C++ 기초",
        "excerpt":"hello word! #include &lt;iostream&gt; using namespace std; int main() { cout &lt;&lt; \"hello word\"; return 0; } if int main(){ int num = 10; if (num &gt; 5) { cout &lt;&lt; \"num &gt; 5입니다.\"&lt;&lt; endl; } else { cout &lt;&lt; \"num &lt; 5입니다.\"&lt;&lt; endl; } return 0; } else if...","categories": ["language"],
        "tags": [],
        "url": "/language/C++/",
        "teaser": null
      },{
        "title": "S/W의 라이프사이클 모형 개요",
        "excerpt":"라이프사이클 모형 분석 → 설계 → 구현 → 시험 → 유지보수 분석 = 니즈분석 + 요구사양화 니즈분석 : 추상적인 요구사항을 객관적인 요구로 정의한다. 무슨 목적인지, 무슨 문제가 있는지(제약사항 : 환경사항), 무슨 기능을 필요로 하는지 요구사양화 : 니즈분석 사항을 문서화한다. 요구정의서 + 외부사양서 요구정의서 : 사용자 중심으로 개념 기술(목적, 기능, I/F,...","categories": ["Software Engineering"],
        "tags": [],
        "url": "/software%20engineering/SE-2/",
        "teaser": null
      },{
        "title": "개발차원",
        "excerpt":"개발차원과 관리차원 개발 : 분석, 설계, 구현, 시험, 유지보수 관리 : 제3자가 이것을 잘개발할수 있게끔 관리 개발차원 : 분석단계 요구분석 : 니즈분석 + 요구사양화 니즈분석 도구 : BS, kJ, 특성요인도법 요구사양화 표기법 : SADT, DFD, SREM의 R-net, PSL, STD, Perti-net 요구분석 단계의 문제점 요구분석 단계에서 아래와 같은 이유로 문제점이 발생한다....","categories": ["Software Engineering"],
        "tags": [],
        "url": "/software%20engineering/SE-3/",
        "teaser": null
      },{
        "title": "[BOJ 2839] 설탕배달",
        "excerpt":"문제 Baekjoon Online Judge 2839번 설탕배달 풀이 문제를 참고하였을 때 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있으며 최대한 적은 개수의 봉지를 사용할려 한다는 것을 알 수 있다. 적은 개수의 봉지를 사용하기 위해서는 5킬로그램 봉지가 더 많이 사용되여야 한다. 따라서 전체 무게를 5로 나누고 나머지를 경우에 따라 처리하는 방식으로 접근하고자 하였다. 나머지에...","categories": ["문제풀이","Baekjoon Online Judge","C++"],
        "tags": [],
        "url": "/%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/baekjoon%20online%20judge/c++/BOJ2839/",
        "teaser": null
      },{
        "title": "[전공] c++응용 1주차 수업테스트",
        "excerpt":"문제 및 조건 10x10 맵 10% 단위로 100% 미만의 마인(■) 생성 Space키로 (32) 맵 변환 임의의 위치 ‘G’ 생성 ‘G’가 (상하좌우 키로) 돌아 다니면서 금광을 집어 먹음 반드시 클래스 구현 정보은닉 구현 main 함수 이하 10라인 이하 풀이 “main 함수 이하 10라인 이하” 조건을 맞추기 위해 start_func()으로 함수 실행 int형...","categories": ["문제풀이","전공 수업 테스트","C++"],
        "tags": [],
        "url": "/%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/%EC%A0%84%EA%B3%B5%20%EC%88%98%EC%97%85%20%ED%85%8C%EC%8A%A4%ED%8A%B8/c++/C++(1)/",
        "teaser": null
      },{
        "title": "[BOJ 1002] 터렛",
        "excerpt":"문제 Baekjoon Online Judge 1002번 터렛 풀이 테스트 케이스의 개수를 받기 위해 T를 선언한 후 T개의 테스트 케이스를 처리하기 위해 new연산자를 이용하여 num[T][6]의 동적 배열을 선언한다. x1,y1,x2,y2를 이용하여 조규현과 백승환 터렛의 거리(dis)를 구한다. (cmath 라이브러리를 가져와 sqrt()함수를 사용) 이후 두 터렛의 거리와 r1, r2를 비교하여 위치의 수를 출력한다. 전체 경우의...","categories": ["문제풀이","Baekjoon Online Judge","C++"],
        "tags": [],
        "url": "/%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/baekjoon%20online%20judge/c++/BOJ1002/",
        "teaser": null
      },{
        "title": "[전공] c++응용 2주차 수업테스트",
        "excerpt":"문제 및 조건 20x20 맵 머리, 몸통, 꼬리 (H, B, T) 상하좌우 (72, 80, 75, 77) 키를 통하여 이동 머리가 움직일 경우, 몸통은 머리의 이전 좌표로 가며, 꼬리는 몸통의 이전좌표만 간다. 반드시 클래스 구현 정보은닉 구현 main 함수 이하 10라인 이하 풀이 “main 함수 이하 10라인 이하” 조건을 맞추기 위해...","categories": ["문제풀이","전공 수업 테스트","C++"],
        "tags": [],
        "url": "/%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/%EC%A0%84%EA%B3%B5%20%EC%88%98%EC%97%85%20%ED%85%8C%EC%8A%A4%ED%8A%B8/c++/C++(2)/",
        "teaser": null
      },{
        "title": "알고리즘 개론",
        "excerpt":"“파이썬 알고리즘 인터뷰” 도서를 이용하여 알고리즘 공부를 시작하고자 한다. 수학과 알고리즘을 공부하는 이유 튼튼한 기본(수학)을 바탕으로 논리적 사고(수학적 사고)를 거쳐 문체 해결(프로그래밍)을 하기 위해서 알고리즘 활용한 문제 해결 = 체계적으로 생각하는 방법은 개발자의 기반을 쌓아준다. 앞으로의 계획 해당 도서를 참고하여 알고리즘, 자료구조를 배우며 해당 카테고리에 내용을 정리하여 참고할 수 있도록...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/1/",
        "teaser": null
      },{
        "title": "코딩 인터뷰란",
        "excerpt":"코딩 인터뷰란? 코딩 인터뷰란 기술 직군 채용을 위한 기술 문제 중심의 개발 인터뷰를 말한다. 일반적으로 오프라인 면접장에서 화이트보드를 이용해 후보자의 기술 지식,코딩 능력, 문제 해결 역량, 창의성 등을 테스트하는 것을 말한다. 코딩 인터뷰와 코딩 테스트의 분류 명칭 온라인/오프라인 면접관 참석 도구 온사이트(오프라인) 코딩 인터뷰 오프라인 O 관계없음 화이트보드 코딩 인터뷰...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/2/",
        "teaser": null
      },{
        "title": "python 문법",
        "excerpt":"이 책에서는 파이썬의 공식 인터프리터인 CPython을 기준으로 한다. 이 부분에서는 문제풀이와 함께 파이썬을 제대로 살펴볼것이다. CPython이란? CPython에 대해서 모르는 부분이 있어 관련하여 내용을 찾아보았다. Python 공식문서에 따르면 다음과 같이 기술되어있다. CPython is the one Python implementation in widespread use Cython은 널리 사용되는 파이썬 구현체이다. 구현체란? 컴퓨터 공학에서, Implementation(구현)이란 기술적으로 정리해놓은...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/3/",
        "teaser": null
      },{
        "title": "코딩 스타일",
        "excerpt":"코딩 테스트에서 코딩 스타일이 중요하지 않다고 생각할 수 있다. 물론 기계적인 방식으로 측정하는 온라인 코딩 테스트에서는 중요하지 않다. 하지만 채용을 위한 코딩테스트는 제출한 코드의 품질을 평가할 수 있으며 인터뷰로 이어져 코드를 리뷰하는 과정에서 좋지 않은 결과를 불러올 수 있다. 위의 도서에는 아래의 책을 추천하고 있다. Clean Code 클린코드(로버트 C. 마틴...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/4/",
        "teaser": null
      },{
        "title": "빅오",
        "excerpt":"빅오 빅오(O, big-O)란 입력값이 무한대로 향할때 함수의 상한을 설명하는 수학적 표기 방법이다. 점근적 실행 시간를 표기할 때 가장 널리 쓰이는 수학적 표기법 중 하나다. 점근적 실행 시간이란 입력값 n이 커질 때, 즉 입력값이 무한대를 향할 때 함수의 실행 시간의 추이를 의미한다. 점근적 실행 시간은 시간 복잡도 라고 할 수 있다....","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/5/",
        "teaser": null
      },{
        "title": "파이썬 자료형",
        "excerpt":"파이썬은 어떤 자료형을 제공하는지, 자료형에는 어떠한 특징이 있는지 알아보자 자료형 숫자 정수형 파이썬은 숫자 정수형으로 int만을 제공한다. int로 충분하지 않으면 자동으로 long 타입으로 변경되는 구조이다. bool은 논리 자료형이나 내부적으로 1(True)과 0(False)으로 처리되는 int의 서브 클래스다. int는 object의 하위 클래스이기도 하기 때문에 object &gt; int &gt; bool의 구조를 띈다. 매핑 매핑타입은...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/6/",
        "teaser": null
      },{
        "title": "리스트, 딕셔너리",
        "excerpt":"리스트와 딕셔너리는 파이썬을 사용하면서 가장 번번하게 접하는 자료형이다. 이번에 구조, 원리, 문법에 대해 상세히 다뤄본다. 리스트 리스트는 순서대로 저장하는 시퀸스이자 변경 가능한 목록을 말한다. 입력 순서가 유지되며, 동적 배열로 구현되어 있다. 파이썬 리스트는 다양한 기능을 제공한다는 점이 매우 큰 장점이다. 이러한 점은 코딩 테스트에서 다른 언어에 비해 매우 유리한 조건을...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/7/",
        "teaser": null
      },{
        "title": "문자열 조작",
        "excerpt":"문자열 조작은 문자열을 변경하거나 분리하는 등의 여러 과정을 말한다. 파이썬은 다른 C와 같은 언어와 다르게 문자열 자료형, 문자열을 조작할 수 있는 여러 기능을 지원하기 때문에 비교적 쉬운 편이다. 문자열 조작은 코딩테스트에서 많이 출제되며 실무에서도 다양하게 쓰이는데 문자열 처리와 관련한 알고리즘이 쓰이는 대표적인 분야는 다음과 같다. 정보 처리 분야 : 어떤...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/8/",
        "teaser": null
      },{
        "title": "python sort()/sorted()",
        "excerpt":"파이썬에서 리스트를 정렬하기 위한 기능으로 sort()와 sorted()가 존재한다. sort()는 배열을 직접변경하고 sorted()는 배열의 원모습을 바꾸지않는 차이점을 가지고 있다. a = [1,3,4,2,5] a.sort() a = sorted(a) 이에 추가적으로 정렬에 존재하는 다양한 인자들에 대해 알아보고자 한다. sort() python 공식문서에 따르면 기본형은 다음과 같다 sort(*, key=None, reverse=False) 두개의 인자를 받아들이며 key와 reverse이다. sorted()...","categories": ["python","grammar"],
        "tags": [],
        "url": "/python/grammar/sort/",
        "teaser": null
      },{
        "title": "배열",
        "excerpt":"자료구조는 크게 두가지로 나누어진다. 메모리 공간 기반의 연속방식 -&gt; 배열 포인터 기반의 연결방식 -&gt; 연결리스트 배열은 어느 위치에나 O(1)에 조회가 가능하다는 장점이 있다. 그러나 처음 선언한 후 배열의 크기를 바꿀 수 없다는 단점이 있다. 이에 크기를 자동으로 조절하는 동적배열이 등장했다. 동적배열은 미리 초깃값을 작게 잡아 배열을 생성하고, 데이터가 추가되면 배열을...","categories": ["python","algorithm"],
        "tags": [],
        "url": "/python/algorithm/9/",
        "teaser": null
      },{
        "title": "이산수학 개요",
        "excerpt":"본글은 편입을 준비하며 이산수학을 공부하였고 관련 내용을 간단하게 정리하였다. 이산수학이란? 이산수학에서 이산이란 연속성이 전혀 없는 분리된 상태를 말한다. 즉, 이산수학은 정수와 같이 분리된 값에 대해 공부하며 분리된 값을 다룬다는 것은 컴퓨터의 특징과 관련이 깊다. 해당되는 내용에는 다음과 같다. 0,1로 이루어진 기게어 처리 -&gt; 사칙연산, 보수연산 문제 해결간 문제해결 방법이 가장...","categories": ["Discrete mathematics"],
        "tags": [],
        "url": "/discrete%20mathematics/1/",
        "teaser": null
      },{
        "title": "수의 표현",
        "excerpt":"수의 체계 자연수 &lt; 정수 &lt; 유리수 &lt; 무리수 &lt; 복소수 수의 연산 나누기 연산(|) 5 | 20 = 4 dq = n 나머지 연산(mod) 20 mod 5 = 0 21 mod 5 = 1 나누기 연산의 정리 d|m, d|n이면 d|(m+n)이다.(나누기 연산이 가능하다.=나머지가 없다.) d|m = k, d|n = l...","categories": ["Discrete mathematics"],
        "tags": [],
        "url": "/discrete%20mathematics/2/",
        "teaser": null
      },{
        "title": "논리 및 증명",
        "excerpt":"논리는 현실세계를 수학적으로 모델링 할 때 사용한다. 명제 현실세계를 간략하고 정확하게 판별하도록 표현한 문장이나 수식 주관적이 아닌, 있다/없다 등 참과 거짓을 결정할 수 있는 문장이 명제가 될 수 있다. 진리값 참(T), 거짓을 가리키는 값 논리연산자와 합성명제 여러 명제를 결합(논리연산자 사용)하여 → 새로운 명제 즉 여러 명제가 논리 연산자에 의해 결합된...","categories": ["Discrete mathematics"],
        "tags": [],
        "url": "/discrete%20mathematics/3/",
        "teaser": null
      },{
        "title": "그래프",
        "excerpt":"그래프 그래프란 공집합이 아닌 꼭짓점의 집합 v와 서로다른 꼭짓점의 쌍을 연결한느 모서리의 집합 E로 구성된 구조 차수에 대한 정리 차수란 꼭짓점 v에 근접하는 모서리의 수를 이야기한다. 차수에 대해서 다음이 성립한다. 그래프에서 모든 꼭짓점의 차수의 합은 모서리 수의 두배이다. 그래프에서 차수가 홀수인 꼭짓점의 수는 짝수이다. 그래프의 종류 부분그래프 그래프 G=(V,E)에 대해...","categories": ["Discrete mathematics"],
        "tags": [],
        "url": "/discrete%20mathematics/4/",
        "teaser": null
      },{
        "title": "트리",
        "excerpt":"트리 및 구성요소 루트라는 특별한 노드를 갖고 그래프를 구성하는 꼭짓점 간에 단순경로가 존재하는 비순환의 연결 그래프를 트리라고 한다. 트리는 노드, 루트로 이루어져 있으며 부모노드, 자식노드, 형제노드, 리프노드, 중간노드, 조상노드, 자손노드, 서브트리, 차수, 레벨, 깊이, 포레스트 등으로 구분할 수 있다. 노드와 모서리에 대한 정리 높 노드의 개수를 v, 모서리의 개수를 e라고...","categories": ["Discrete mathematics"],
        "tags": [],
        "url": "/discrete%20mathematics/5/",
        "teaser": null
      },{
        "title": "nft",
        "excerpt":"NFT란?   FT(Fungible Token) 대체가능한 토큰 예) 비트코인   NFT(Non) 대체불가능한 토큰   특별한이유   누구것인지 블록체인 위의 스마트컨트렉에 기록이되며 누구나 볼 수 있으며 위조가 불가능   일반적으로 기본 뼈대에 여러조합을 바꿔가며 만들어간다   nft 제작흐름  대량으로 nft를 만들때에는     여러 파트를 제작하고   파트들을 조합하고   민팅을 진행 민팅 : nft를  ","categories": ["Discrete mathematics"],
        "tags": [],
        "url": "/discrete%20mathematics/1/",
        "teaser": null
      },{
        "title": "자바스크립트 기본문법",
        "excerpt":"이 글은 생활코딩 JavaScript를 이용하여 기본 문법 정리한 문서입니다. JavaScript와 만남 다음과 같은 방법으로 기존의 html과 javascript를 접목할 수 있다. script &lt;script&gt; // 이 부분부터 js명령어 실행한다. document.write(1+1);&lt;/script&gt; 이벤트 &lt;input type=\"button\" value=\"hi\" onclick = \"alert('hi')\"&gt; &lt;input type=\"text\" onchange=\"alert('changed')\"&gt; &lt;input type=\"text\" onkeydown=\"alert('key down!')\"&gt; onclick 속성 값으로는 반드시 자바스크립트가 와야한다. 속성값은 웹브라우저가...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/js/",
        "teaser": null
      },{
        "title": "오밥무(wtm) 프로젝트 개요",
        "excerpt":"간단한 프로젝트를 시작하며 아이디어 정리 및 필요한 요소들을 이 페이지에서 정리하고자 한다. 아이디어만 생각해놨지 어떠한 방식을 이용하여 구현할 것인지 구현하는 과정에서 어떠한 기술이 필요한지는 정하지 못한상황이다. 사실 아는것이 너무 부족하여 구현간에 필요한 기술 모두를 새로 배워야 한다고 생각한다. 이번 기회로 어떤 것을 내가 하고싶은것에 대해 더욱 알아가는 과정이 되었으면 좋겠다....","categories": ["project"],
        "tags": [],
        "url": "/project/1/",
        "teaser": null
      },{
        "title": "wtm 프로젝트 웹스크래핑",
        "excerpt":"식단표 페이지 분석 학교의 식단표 페이지에는 일주일간의 식단이 표로 식단을 표기하였고 표의 오른쪽 위에 날짜를 선택할 수 있어 선택한 날짜에 해당하는 주에 대한 식단표가 나오는 방식이다. 처음 보았을 때 크게 대강 두 부분으로 나누어 어떻게 할지 고민해보기로 하였다. 날짜를 선택하는 부분 표의 오른쪽 위에 날짜를 선택할 수 있어 선택값에 따라...","categories": ["project"],
        "tags": [],
        "url": "/project/2/",
        "teaser": null
      },{
        "title": "wtm 프로젝트 kakao api",
        "excerpt":"스크래핑에 이어서 다음 목표는 카카오톡 API를 사용하여 정해진 시간에 스크리핑 내용을 전송하는 프로그램 구현 이다. 카카오톡 api관련 실습 구현에 초점을 맞추기전에 어떻게 사용하는지에 대해서 알아보고자 했다. 카카오 API 사용에 대해서 다음에 블로그를 참고하였다. GGRS: Geoscience, GIS, &amp; Remote Sensing - 카카오 API를 이용하여 나에게 메시지 보내기. GGRS: Geoscience, GIS, &amp;...","categories": ["project"],
        "tags": [],
        "url": "/project/3/",
        "teaser": null
      },{
        "title": "wtm 프로젝트 여러 기능 결합",
        "excerpt":"이번 목표는 스크래핑과 메시지 전송 기능을 결합하는 것 이다.   프로젝트 재확인   ","categories": ["project"],
        "tags": [],
        "url": "/project/4/",
        "teaser": null
      }]
