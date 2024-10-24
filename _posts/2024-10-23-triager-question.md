---
layout: post
title: Access the Bug
tags: weekly-challenge
---

Every week, we present a bug description and ask you to evaluate its validity and severity. Let's sharpen our skills together!

---

**Scenario 1:**

A researcher found that by intercepting and modifying API requests, they could bypass the rate limiting on the login page, potentially allowing for brute force attacks.

**Out-of-scope:**
- Denial of Service attacks
- Social engineering
- Physical security issues
- Vulnerabilities requiring man-in-the-middle attacks

**Your challenge:**
1. Is this a valid bug based on the out-of-scope items?
2. If valid, what CVSS score would you assign and why?

---

**Scenario 2:**

An attacker discovered that by using a specific browser extension, they could inject malicious JavaScript into the application, leading to potential XSS attacks.

**Out-of-scope:**
- Issues requiring software installation on user devices
- Vulnerabilities in third-party applications or plugins
- Self-XSS vulnerabilities
- Issues affecting users on outdated browsers

---

**Scenario 3:**

A penetration tester identified that the application's error messages in the forgot password functionality reveal whether an email address exists in the system or not.

**Out-of-scope:**
- Brute force attacks
- Issues related to password policies
- Two-factor authentication bypass
- Account lockout policies

---

**Scenario 4:**

A security researcher discovered that customer data from the company, including email addresses and hashed passwords, is being sold on a dark web marketplace. The data appears to be from a breach that occurred 2 years ago. The company has not publicly disclosed this breach.

**Out-of-scope:**
- Vulnerabilities in the current application's code
- Server misconfigurations
- Issues in staging or testing environments
- Vulnerabilities in third-party services

---

**Scenario 5:**

By manipulating the 'order_id' parameter in the order history API, a user could view and modify other users' order details, including shipping addresses and payment information.

**Out-of-scope:**
- Clickjacking
- Cross-site request forgery (CSRF)
- Descriptive error messages
- Rate limiting issues

---

**Scenario 6:**

A tester discovered that the application's custom-built CAPTCHA system could be bypassed by sending requests with specific headers, potentially allowing for automated attacks.

**Out-of-scope:**
- Denial of Service attacks
- Issues related to password complexity
- Vulnerabilities in third-party CAPTCHA services
- Brute force attacks on login pages

---

**Scenario 7:**

During a physical penetration test, an attacker gained access to the company's office and found sticky notes with admin credentials near employee workstations.

**Out-of-scope:**
- Online vulnerabilities
- Social engineering attacks
- Issues related to employee training
- Vulnerabilities in physical security systems

---

**Scenario 8:**

A researcher identified that the third-party payment gateway integrated into the application was vulnerable to a recently disclosed zero-day exploit.

**Out-of-scope:**
- Vulnerabilities in the main application's code
- Server misconfigurations
- Issues in staging or testing environments
- Theoretical vulnerabilities without proof of exploit

---

**Correct answers (for admin use only):**

1. Valid. CVSS 7.5 (High) - This is a valid finding as it bypasses a security control (rate limiting) and could lead to unauthorized access through brute force attacks.

2. Invalid (Out of scope). While this is a serious issue, it relies on a browser extension, which is out of scope as it requires software installation on user devices.

3. Valid. CVSS 5.3 (Medium) - This is a valid information disclosure vulnerability that could aid in user enumeration attacks.

4. Invalid (Informative). While this is critical information that the company should be aware of, it's not a current vulnerability in their systems. It's more of a notification about a past incident that requires the company's attention for customer notification and potential remediation steps. This type of finding is typically classified as an informative issue rather than a vulnerability. The company should be notified immediately, but it may not qualify for a bounty under most bug bounty program rules.

However, the researcher should still report this to the company as it has significant implications:
- The company may need to notify affected users
- They may need to force password resets
- There could be legal or regulatory obligations to disclose the breach

While not a "bug" in the traditional sense, this information is valuable for the company's overall security posture and incident response.
5. Valid. CVSS 8.6 (High) - This is a serious Insecure Direct Object Reference (IDOR) vulnerability allowing unauthorized access and modification of user data.

6. Valid. CVSS 7.5 (High) - Bypassing CAPTCHA is a valid security issue that could lead to automated attacks on the application.

7. Invalid (Out of scope). Physical security issues are explicitly mentioned as out of scope for this scenario.

8. Invalid (Out of scope). Vulnerabilities in third-party services are listed as out of scope for this scenario. However, this should be reported to the company as it poses a significant risk.

Remember, there's often no single correct answer in bug bounty hunting. The goal is to practice critical thinking and learn from each other's perspectives!
