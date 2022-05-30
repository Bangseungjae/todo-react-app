## Fonrt-End
 - React
## Back-End
 - Java
 - Spring
## DevOps
 - AWS ELK
 - AWS Codepipe
 - AWS Route53

## description
 - simple todo list 


### What's problem
SSL인증서 설정에서 배포 오류

### Resolution
인증서 발급 후 로드밸런서 적용
<code><img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d854f371-e8de-46cd-b775-968f327639d6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220530T134222Z&X-Amz-Expires=86400&X-Amz-Signature=3ed9cfd9fd570d591e3e521efd93e2d93d3011f70b40a7cffff78706b12778d6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"></code>
다음은 80port로 들어와도 https를 적용하기 위한 절차이다.
EC2 → 로드밸런서 → 규칙 → 규칙 보기/편집
<code><img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/82565f5f-e5dc-43f3-8969-7fcbc2d3d048/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220530T134425Z&X-Amz-Expires=86400&X-Amz-Signature=60cae3814099c0454ea2b95e164bb50c991bbe204ebff2d9cf18af001cfad19b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"></code>

THEN의 원래 있던 규칙을 지우고 리디렉션 대상을 https 443port로 설정한다.
<code><img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/572f989b-cf52-4688-b4fe-6a3654cea980/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220530T134501Z&X-Amz-Expires=86400&X-Amz-Signature=af5bdc49c38c290680c28b43af71cd1e70085a568c9ab0ca2940d68f59382a71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"></code>

그러면 끝!

실행에 문제가 있을 경우 자신의 cors과 api메서드 설정을 확인해 볼것
