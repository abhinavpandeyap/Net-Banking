# Net-Banking Application

# Document
System Requirement Specification Document

# Title 
System Requirement Specification for a Net-banking Application

# Team 
Chief Mentor, System Analyst, Designer, Developer (Front-End & Bak-End), Database Administrator, Tester, Stakeholders

# Objective
The Net-Banking Application is a Web Application to provide complete solution for a Bank to manage the Details of its Employees and the Users and the Transactions between any two account holders and gives the facility to the user to register himself as an Account Holder in the Bank.
It also stores all the transaction details and can be viewed by the Account Holders as well as the Bank.


# Scope
This System allows the user to create their own account and manage it as the Account holder in the Bank and gives the facility to the bank to verify and manage the Accounts of each Account Holder.
It will be able to show daily transactional record to the Core Management of the Bank.   
It also stores all the transaction details for each and every Account Holders as well as the new Users (who are willing to register in the bank) and it could be viewed by the users and the Bank (Staff and Management).
The Money Transfer would be hassle-free and convenient for the Account Holders as it will be a Real-Time Money Transfer system. It will be reverted if any issue occurred.
The Account holders can only view their data only and the Bank Staffs will be able to view the details of All the registered account holders.
The Core Management Team will have access to view and manage all the Account Holder details and also view the Daily Reports.


# Definitions
AH: Account Holders
TD: Transaction Details
MD: Money Deposit
MW: Money Withdrawal
BS: Bank Staff
BM: Bank Management
AT: Account Type
DR: Daily Reports
Dashboard: Personalized information presented using BI techniques such as grid, score card, graphs. 

# Functional Requirements
There will be four different perspectives and functionalities for the four different users which are: -
Core Management Team of the Bank.
Bank Staffs.
Account Holders.
New Users.

New users can apply for the registration in the bank of any Account Type (By filling their details) and it will be approved by the Bank Staff after complete Verification. Then the user will be registered as the Account Holder in the bank.
New users can track their Application Status and Account Holders can view their personal dashboard which will contain information like – Personal Details, Account Details and Transaction Details.
To update the Account Holder details the AH can contact to the bank staff and Bank Staffs can update the Account Holder Details as per the Banks guidelines.
Any Account Holder will be able to delete his account permanently by contacting the Bank Staff after the complete verification.
The bank staff can view their personal details all the account details of the Account Holders and the applications of new users.
The bank staff will be able to update the details of the Account Holders if AH wants after the Verification.
The Core Management Team will have access to view and manage all the Account Holder details and also view the Daily Reports.
The Core Management Team will be able to view and manage the bank staff details will have access to remove them from the current staff list.  

# Non-Functional Requirements
Security:
Registered user will be allowed to do transaction only after authentication.
Transfer of fund will be done after verifying OTP (One Time Password) for particular registered customer.
System will provide access to content and operations using role-based security (Authorization) and (Permission based on roles)
System will automatically log of all stakeholders after some time due to inactiveness
System will block operations for inactive stakeholder and redirect for authentication.
System will internally maintain secure communication channel between Servers
(Web servers, App servers, database server)
Sensitive data (while login and transferring funds) will be encrypted across communication.
Uses proper firewall to protect servers from outside fishing and vulnerable attacks.

Reliability:
The system will backup bank data on regular basis and recover in short time duration to keep system Operational.
Continuous updates are maintained, continuous-Administration is done to keep system operational. 
During peak hours system will maintain same user experience by managing load balancing.

Availability:
 The System will be 24* 7 available with 99.999% response rate.





