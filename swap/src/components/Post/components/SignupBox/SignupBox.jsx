import styled from "styled-components";

function SignUpBox() {
    return(
        <SignUpSection>
            <div className='sign-up-outter'>
                <h3>Xin chào! Có vẻ như bạn đang thích cuộc thảo luận, nhưng bạn chưa đăng ký tài khoản.</h3>
                <p>
                    Khi bạn tạo tài khoản, chúng tôi nhớ chính xác những gì bạn đã đọc, vì vậy bạn luôn quay lại ngay nơi bạn đã dừng lại. 
                    Bạn cũng nhận được thông báo, tại đây và qua email, bất cứ khi nào ai đó trả lời bạn. 
                    Và bạn có thể thích bài viết để chia sẻ.<img src='images/heartpulse.png' alt=''/>
                </p>
                <div className='buttons'>
                    <button className='btn-signup'><i class="fas fa-check"></i><span>Đăng ký</span></button>
                    <button className='btn-remind'><span>Nhắc vào ngày mai</span></button>
                    <a href="/#" className='no-thank'>không, cảm ơn</a>
                </div>
            </div>
        </SignUpSection>
    );
}

const SignUpSection = styled.section`
    .sign-up-outter{
        background: #ffd9eb;
        padding: 40px 85px 60px 55px;
        margin: 25px 0 40px;
    }
    h3{
        font-size: 18px;
        font-weight: 700;
    }
    p{
        font-size: 15px;
    }
    img{
        width: 20px;
        height: 20px;
    }
    .btn-signup{
        color: #fff;
        border: 1px solid #ff007a;
        background: #ff007a;
        padding: 3px 10px;
        margin-right: 10px;
        transition: 0.3s all ease;

        :hover{
            background: #bf005c;
            border: 1px solid #bf005c;
        }
    }
    .btn-remind{
        border: none;
        padding: 4px;
        font-size: 15px;
        margin-right: 10px;
        transition: 0.3s all ease;

        :hover{
            background: #919191;
            color: #fff;
        }
    }
    .no-thank{
        color: #ff007a;
        text-decoration: underline;
    }
`

export default SignUpBox;