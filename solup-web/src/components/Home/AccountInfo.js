import React, { useState } from 'react';
import './AccountInfo.css';
import MiniBtn from '../MiniBtn';

function AccountInfo() {
  // 계좌 정보가 등록 여부 확인
  const [isAccountRegistered, setIsAccountRegistered] = useState(false);

  // 계좌 정보 (등록된 경우에만 표시)
  const accountData = {
    bankName: '신한은행',
    accountNumber: '123-456-7890',
    accountBalance: '1,000,000',
  };

  // 계좌 등록 페이지로 이동하는 함수
  const redirectToAccountRegistration = () => {
    // 계좌 등록 페이지로 이동하는 코드
    setIsAccountRegistered(true);
  };

  return (
    <div className='infoContainer'>
      <div className='infoTitle'>
        {/* 가게 정보, 사용자 이름 받아와서 적용되어야 함 */}
        <div className='normalText'>
          <span>신한커피 </span>
          <span className='boldText'>김싸피 </span>
          <span>사장님</span>
        </div>
      </div>
      {isAccountRegistered ? (
        <div className='accountContainer'>
          <img src={`${process.env.PUBLIC_URL}/cardProfit.png`} alt="계좌카드" className='cardImg'/>
          <div className="textOverlay">
            <div className='bankName'>
              <img src={`${process.env.PUBLIC_URL}/shinhanLogo.png`} alt="신한로고" className='shLogo'/>
              <span> {accountData.bankName}</span>
              <span> {accountData.accountNumber}</span> 
            </div>
            
            <div className='balance'>
              <span className='boldBalance'>{accountData.accountBalance}</span>
              <span className='normalBalance'> 원</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='noAccount'>
          <div>아직 거래내역이 없네요!</div>
          <div>사업자 계좌를 등록해주세요</div>
          <MiniBtn text="등록하기" onClick={redirectToAccountRegistration} />
        </div>
      )}
    </div>
  );
}

export default AccountInfo;
