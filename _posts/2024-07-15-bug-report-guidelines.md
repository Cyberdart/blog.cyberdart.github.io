---
layout: post
title: Bug Report Guidelines
tags: Bug-Bounty 2024
---

# Bug Report Guidelines

The CyberDart triaging team is committed to improving the efficiency and effectiveness of bug bounty reports. We understand the challenges faced by hackers in crafting comprehensive and impactful vulnerability reports. To aid in this process, we have compiled these guidelines to clarify what constitutes a valid bug, the importance of root cause analysis, and how to effectively communicate the impact of discovered vulnerabilities. 

Our goal is to streamline the triage process, ensure fair evaluation, and ultimately enhance the security posture of the applications we assess.


## What is a Bug and What is Information?

Understanding the difference between a bug and an informational finding is crucial for writing effective bug bounty reports.

A **bug** is a flaw that an attacker can exploit to gain unauthorized access, manipulate data, or cause unintended behavior. For instance, if a login page is accessible when it should not be, this is a misconfiguration. However, if this login page can be bypassed to access restricted data, that constitutes a bug.

Conversely, an **informational finding** is a piece of information that might indicate a potential vulnerability but does not, on its own, provide a direct way for an attacker to exploit the system. For example, reporting that a login page is accessible when it shouldn't be is valuable information but not a bug by itself. This information might help in exploiting a vulnerability, but it does not directly lead to an exploit without additional context or actions.

It's important to note that both bugs and informational findings should be reported. While informational findings are not classified as bugs, they provide valuable insights that could aid in understanding the overall security posture of the application.

To be classified as a valid bug report, the report must detail a flaw that can be exploited. For example, if the accessible login page allows an attacker to bypass authentication and access sensitive data, this should be reported as a bug.


## Root Cause Bug - Report Aggregation

A common challenge in bug bounty programs is the submission of multiple reports that describe similar vulnerabilities across different endpoints or scenarios. While each report may seem distinct, often they can be consolidated into a single comprehensive report. This practice not only reduces redundancy but also ensures that the focus remains on critical vulnerabilities, and makes communication smoother throughout the triage process.

When multiple vulnerabilities appear similar, it often suggests they share a common root cause. But what does "Root Cause" mean?

In bug bounty programs, a **Root Cause Bug (RCB)** is a fundamental flaw that can lead to multiple vulnerabilities across various parts of an application. Identifying RCBs is essential for improving overall security and efficiency in vulnerability management. While as triagers, we can make educated assessments, the final determination typically requires insights from the customer, who has access to the application's codebase and infrastructure.

Consider an application where two different paths are vulnerable to XSS attacks:

- `https://subdomain1.example.com/pageone?input=<script>alert(document.domain)</script>`
- `https://subdomain2.example.com/pagetwo?input=<script>alert(document.domain)</script>`

Let's suppose both endpoints use the same flawed sanitization function, `my_sanitize_xss()`. Addressing this function would fix both vulnerabilities, confirming that they share the same root cause.

Aggregating reports that potentially share the same root cause offers several advantages:

- Prevents the triage team from being inundated with multiple reports of the same issue.
- Allows focus on unique and critical vulnerabilities.
- Simplifies and streamlines the management of vulnerability reports.
- Facilitates clearer and more efficient communication between triagers and hackers.

### Bounty Compensation Clarification
 
Now, you might wonder: if I submit one aggregated report covering multiple vulnerabilities with the same root cause, do I receive only one bounty?

If it is confirmed that multiple vulnerabilities stem from the same root cause, the reward is based on the severity of that root cause. This means you would receive a bounty corresponding to the impact and severity of the underlying flaw. However, if different root causes are identified for the vulnerabilities, bounties will be adjusted accordingly to reflect the number and severity of unique issues found.


## Report Naming

Clear and concise report names are essential for effective bug tracking and management. A well-named report helps the triage team quickly understand the nature of the issue, prioritize it appropriately, and ensure that similar issues are grouped together.

A good report name should be:

- **Short and Descriptive**: Summarize the vulnerability in a few words.
- **Specific**: Mention the type of vulnerability and the affected component.
- **Consistent**: Follow a standard format to maintain uniformity across reports.

Examples of Good Report Names:
- "XSS Vulnerability in Search Function"
- "SQL Injection in User Login Endpoint"
- "CSRF in Account Settings Page"
- "Open Redirect in Password Reset Link"

Examples of Bad Report Names:
- "Issue in Website"
- "Security Bug"
- "XSS"
- "Vulnerability Found"

I could be going forever with examples of bad names...

When naming your report, consider the following format:
- "{bug} - {where}"



## Proof of Concept

A crucial aspect of writing an effective bug bounty report is the Proof of Concept (PoC). The PoC serves to demonstrate the existence and severity of a vulnerability clearly and reproducibly. Here’s how to craft a compelling PoC:

### Elements of a Good Proof of Concept

1. **Reproducibility**: The PoC should provide step-by-step instructions that allow anyone to reproduce the vulnerability. Include all necessary details such as URLs, parameters, payloads, and any other specific conditions required to trigger the vulnerability.

2. **Clear Description**: Instead of stating that a vulnerability exists, show precisely how it can be exploited. For example, if an XSS vulnerability allows session hijacking, demonstrate this by crafting a payload that executes JavaScript and captures session cookies.

3. **Methodology**: Describe the methodology used to discover and exploit the vulnerability. This includes the tools, scripts, or techniques employed during testing. Detail any prerequisites or environmental conditions necessary for the vulnerability to manifest.

4. **Evidence**: Provide tangible evidence of the vulnerability’s impact. This may include screenshots, logs, HTTP requests/responses, or any other relevant data that corroborates the exploit’s success.

A well-crafted Proof of Concept not only validates the existence of a vulnerability but also aids in its swift mitigation. It provides clarity to triagers and developers, facilitating faster understanding and remediation. Additionally, a thorough PoC increases the likelihood of receiving fair compensation for the reported vulnerability.

> Remember: The only way to substantiate your claim and receive your bounty is with a valid and replicable Proof of Concept. No PoC = No Bounty.

## Real Impact

In bug bounty programs, understanding the true impact of a vulnerability is crucial for determining its severity and subsequent compensation. Not all vulnerabilities are created equal; some may exist but have minimal practical impact on the application's security posture or its users.

### Key Factors for Impact Assessment:

1. **User Context**: Consider the environment in which the vulnerability exists. For instance, an XSS vulnerability on a static page without user interaction or sensitive data poses minimal risk compared to one on a login page handling sensitive user information.

2. **Exploit Difficulty**: Evaluate the ease or difficulty of exploiting the vulnerability in real-world scenarios. Complex exploit requirements may significantly reduce the practicality of the vulnerability.

3. **Likelihood of Occurrence**: Assess the probability of the vulnerability being exploited in real-world settings. Vulnerabilities that require uncommon user actions or specific environmental conditions have reduced practical impact.

### Example Scenario:

In bug bounty programs, understanding the true impact of a vulnerability is crucial for determining its severity and subsequent compensation. Not all vulnerabilities are created equal; some may exist but have minimal practical impact on the application's security posture or its users.

Consider these key factors when assessing impact:

- **User Context**: Evaluate the environment where the vulnerability exists. An XSS vulnerability on a static page without user interaction or sensitive data poses minimal risk compared to one on a login page handling sensitive user information.

- **Exploit Difficulty**: Assess how easy or hard it is to exploit the vulnerability in real-world scenarios. Complex exploit requirements may significantly reduce its practical impact.

- **Likelihood of Occurrence**: Determine the probability of the vulnerability being exploited in real-world settings. Vulnerabilities that require uncommon user actions or specific environmental conditions have reduced practical impact.

Consider the following example scenario:

Imagine an XSS vulnerability on a static informational page `https://example.com/info`:

- **Context**: The page contains static information with no user login or personal data.
- **Exploit**: Requires injecting a script that executes only when a user manually interacts with the page in an unexpected way.

Does this vulnerability have a significant impact? If yes, consider stopping your bug bounty career. 

Just kidding. Or maybe not.

In reality, the impact here is minimal, as successfully exploiting the vulnerability requires specific, unlikely user interactions.


Identifying vulnerabilities with substantial real-world impact ensures that resources are allocated effectively to mitigate critical security risks. Bug bounty programs prioritize vulnerabilities that pose tangible threats to user data, system integrity, or operational continuity. Accurately assessing impact helps prioritize mitigation efforts and enhances overall security measures.


Submitting vulnerabilities with clear, demonstrable impact increases the likelihood of fair evaluation and appropriate compensation. Focus on vulnerabilities that present genuine risks and practical exploits to maximize the impact of your bug bounty submissions.

Every application operates differently, and vulnerabilities must be evaluated relative to their specific context. For example, an IDOR (Insecure Direct Object Reference) in a home banking application carries far greater significance than in a personal blog. Understanding this context ensures vulnerabilities are appropriately assessed and addressed.



## Conclusion

With these guidelines in hand, you now have a clear framework for crafting impactful bug reports that maximize your chances of fair compensation. Remember, detailed Proof of Concepts, clear impact assessments, and concise report naming are key to standing out in the bug bounty community. From now on, there are no excuses for submitting shitty reports!

Thank you for your dedication to improving application security through responsible vulnerability disclosure.

Greetings,
CyberDart triaging team.
