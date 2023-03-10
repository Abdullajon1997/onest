import React from "react";
import "./Account.scss";
import AccountHeader from '../AccountHeader/AccountHeader'
import AccountSection from '../AccountSection/AccountSection'
import InformationAccaunt from '../InformationAccaunt/InformationAccaunt'

function Account() {
  return (
    <>
        <AccountHeader/>
        <main className="InformationAccaunt__main container">
        <AccountSection/>
        <InformationAccaunt/>

        </main>
    </>
  );
}

export default Account;
