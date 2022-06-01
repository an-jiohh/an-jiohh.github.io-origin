---
title:  "DB 프로젝트 개요"
excerpt: "DB를 활용한 인터넷 쇼핑몰"

toc: true
toc_sticky: true
toc_label: "TOC"

categories:
  - Data Base
  - Data project
last_modified_at: 2021-11-14T16:30:00-20:00
---

## 목표
DATABASE를 이용하는 간단한 웹사이트를 구축하는 것을 목표로 한다.  
아직 html, java script, server, database를 알지 못하거나 활용이 미숙한 상태로 이러한 프로젝트를 통하여
프론트와 백의 상호작용을 통하여 어떤 작동방식으로 서비스가 구현되는지 알아보고자 한다.  
따라서 다음과 같은 세부 목표를 달성해야 할 것으로 생각한다.

1. 서비스를 위하여 html, java script를 이용한 웹페이지 구축
2. html, java script와 상호작용하는 database 구축
3. 해당 웹페이지를 위한 서버 구축

## 주제
- 의류 쇼핑몰 유저 편의성을 위한 데이터베이스 시스템
- 사이즈 선택을 좀 더 용이하게 할 데이터베이스 시스템

기존의 데이터베이스 시스템 중 제약사항 및 문제점을 찾던 도중 의류 쇼핑몰에서 불편함을 생각하였고
토의를 통하여 현재 쇼핑몰의 발견한 문제점은 다음과 같다.  
- 의류 쇼핑몰에서 키, 몸무게와 같은 DB를 저장하고 사용하지만 리뷰에서만 사용된다. 그래서 구매자가 직접 여러 리뷰를 찾아보며 비교해 볼 수 밖에 없다.
- 의류 사이즈를 고르는데 있어서 쇼핑몰이 제공하는 사이즈표만으로는 자신과 딱 맞는지 알 수가 없다.
- 의류를 착용한 모델의 사진을 보여주고 모델의 신체정보를 알려주나 자신과 맞지않는 경우가 많고 모델의 신체정보를 주지않는 쇼핑몰도 많다.

## 해결방안
쇼핑몰에서 자신의 신체정보와 여러리뷰를 종합하여 적당한 사이즈를 추천하여 준다.

1. 웹사이트에서 자신의 신체정보를 입력한다.
2. 의류를 사기위하여 개별 페이지에 들어갈 경우 리뷰데이터를 종합하여 무슨 옷이 적당할지(사이즈가 비슷한 다른고객들이 어떤것을 선택하였는지)제공하여 준다.  