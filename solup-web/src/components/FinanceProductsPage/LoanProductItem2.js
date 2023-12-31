import React from "react";
// import style from "./LoanProduct.module.css";

function LoanProductItem2() {
  const handleOpenApp = () => {
    const appScheme = "com.shinhan.sbanking";
    const appLink = `intent://${appScheme}/#Intent;scheme=${appScheme};action=android.intent.action.VIEW;package=${appScheme};end`;
    window.location.href = appLink;
  };
  return (
    <div className="savingProduct" onClick={handleOpenApp}>
      <p className="itemTitle">땡겨요사업자대출</p>
      <div className="itemContent">
        <p>사업 기간 6개월 이상 땡겨요 입점 사업자</p>
        <p>한도 : 최대 1천만원 이내(최소 1백만원 이상)</p>
      </div>
    </div>
  );
}

export default LoanProductItem2;
