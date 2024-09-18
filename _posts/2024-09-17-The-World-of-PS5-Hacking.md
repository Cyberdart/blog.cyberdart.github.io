---
layout: post
title: The World of PS5 Hacking
tags: Bug-Bounty PS5 Hardware FreeBSD Jailbreak
---

**Disclaimer**: Hacking a gaming console may violate the terms of service and warranty agreements and could expose users to legal action. This post is for informational purposes only and does not encourage or endorse illegal activities.

### Introduction

In the world of gaming, hacking and homebrew communities have long been at the forefront of pushing boundaries, providing players with more control over their hardware and enabling a wealth of customizations and tweaks. One of the most recent and highly anticipated targets for hackers is Sony's PlayStation 5 (PS5). Despite the PS5's impressive capabilities, enthusiasts worldwide are eager to explore its potential beyond Sony’s original intentions. Among the key figures in this movement are **theflow0**, **flatz**, and many others whose groundbreaking research has made significant waves in cracking the PlayStation’s security systems.

In this blog post, we will discuss the significant breakthrough achieved by theflow0 with the early release of the **PPPwn exploit**, the first PlayStation 4 Kernel Remote Code Execution (RCE) supporting firmware up to 11.00. We’ll also examine what it means to hack the PS5, the progress made so far, and the integral roles played by these influential figures.

### What Does It Mean to Hack a PS5?

Hacking a console like the PS5 involves bypassing its security features to run software that isn’t officially authorized by the manufacturer. This includes the installation of homebrew applications, custom firmware (CFW), and, in some cases, pirated games. While piracy is a significant concern for console manufacturers, hacking has historically enabled other legitimate uses, such as customizing the user interface, improving hardware performance, and adding new features.

For the PS5, the hacking process involves exploiting vulnerabilities in the console's operating system or hardware to gain root access. Once achieved, hackers can manipulate the system at a deeper level, allowing them to run unsigned code or bypass restrictions imposed by Sony. This task is particularly challenging due to the PS5’s advanced security architecture.

### TheFlow Publishes PPPwn: A Major Milestone

Recently, **theflow0** made headlines in the PlayStation hacking community by releasing the highly anticipated **PPPwn exploit** ahead of schedule. This exploit represents the first PlayStation 4 Kernel Remote Code Execution (RCE) and supports firmware versions up to 11.00. The vulnerability arises from a security flaw related to **PPPoE** (Point-to-Point Protocol over Ethernet) connections.

TheFlow’s discovery reveals that a malicious PPPoE server can cause denial-of-service or, worse, remote code execution in the kernel context on both PS4 and PS5. This is due to a heap buffer overwrite and overread in functions such as `sppp_lcp_RCR` and `sppp_ipcp_RCR`. Notably, both consoles are vulnerable to a long-known issue (CVE-2006-4304), where invalid options can lead to a heap buffer overflow, enabling malicious actors to overwrite or overread the heap memory.

The vulnerability was reported on September 22, 2023, and disclosed on April 25, 2024, resulting in a 12,500 USD bounty. Additionally, recent activity, specifically 22 days ago, suggests that theflow0 has discovered another vulnerability, which earned him an additional 10,000 USD bounty. Although details are sparse, this new discovery could lead to another significant exploit, further advancing progress in PS5 hacking.
### Why Are These Hacks Important?

For many, hacking a console is exciting not because it facilitates piracy but because it unlocks new possibilities for custom content. A hacked PS5 or PS4 can allow users to:

- Run homebrew games and applications
- Customize the user interface and performance settings
- Enable backward compatibility with a broader range of older games
- Experiment with different operating systems or software modifications

While the potential for malicious use exists, most hacking efforts stem from a desire to give users more control over their hardware. In an era where companies like Sony maintain strict control over their ecosystems, the hacking community acts as a counterbalance, advocating for greater user freedom.

### PS5 Software Kernel Exploit Mitigations

The PS5’s kernel, based on **FreeBSD 11.0** (`__FreeBSD_version 1100122`), incorporates several sophisticated mitigations to prevent unauthorized code execution. Key features include:

- **NX Bit (No Execute Bit)**: Prevents certain memory regions from executing code, making it harder for attackers to run malicious code through vulnerabilities like buffer overflows.
- **SMAP (Supervisor Mode Access Prevention)**: Ensures the kernel cannot access user-space memory directly, helping to mitigate potential privilege escalation attacks.
- **SMEP (Supervisor Mode Execution Prevention)**: Blocks the execution of user-space code in kernel mode, adding an extra layer of security.
- **UMIP (User-Mode Instruction Prevention)**: Prevents privileged CPU instructions from being executed in user mode, further limiting the capabilities of malicious code.
- **NDA/XOText (Executable-Only Text)**: Enforced through **EFER bit 16**, this feature ensures that certain memory regions can only execute code but cannot be read from or written to, adding another barrier to exploitation.

### PS5 Hypervisor: A Key Pillar of Security

The PS5’s **hypervisor** is crucial for maintaining system security by protecting kernel code integrity and enforcing strict memory protections.

- **Early Iterations**: In firmware versions 2.50 and below, the hypervisor was part of the kernel binary itself. This first iteration, while less modular, was essential.
- **Later Versions**: In newer firmware versions, the hypervisor is a separately loaded component, allowing it to manage system security more effectively and independently of the kernel.

#### Hypervisor’s Key Functions

The hypervisor’s primary goal is to enforce **eXecute-Only Memory (XOM)** or **XOText**, ensuring that memory regions containing executable code cannot be read or written to. This significantly increases the difficulty for attackers seeking to manipulate or leak kernel code.

To achieve this, Sony employs several features of **AMD’s Secure Virtual Machine (SVM)**, including:

- **Nested Page Tables (NPT)**: Facilitates efficient memory virtualization and restricts memory access based on privilege levels.
- **Guest Mode Execute Trap (GMET)**: Prevents certain instructions from being executed within virtualized environments.
- **Intercepting Control Registers (CRs) and Machine State Registers (MSRs)**: Ensures that sensitive system configurations, such as control registers, cannot be altered by unauthorized code.

Additionally, the **xotext** feature is likely hardware-backed through a collaboration with AMD, known as the **“nda feature”**, providing an extra layer of security at the hardware level.

The hypervisor also manages the **I/O Memory Management Unit (IOMMU)**, which controls access to memory for external devices and mitigates **Direct Memory Access (DMA)** attacks.

### Conclusion: The Future of PS5 Hacking

The vulnerability discovered by theflow0 has led to the first RCE exploit for the PS4, while efforts to exploit the PS5 continue. Sony’s mitigations have made hacking more challenging, highlighting the importance of bug bounty programs and how they help improve console security.

Thanks to contributions from researchers like theflow0, the PlayStation hacking scene is advancing rapidly. Their discoveries and reverse engineering efforts have significantly progressed PS4 and PS5 hacking, and it’s only a matter of time before more comprehensive hacks emerge.

However, these advances come with ethical and legal considerations. While some hackers aim to expand user control over their hardware, others might exploit these vulnerabilities for malicious purposes. For now, the PS5 remains relatively secure, but hackers and security researchers are keeping a close watch on future developments.

**Stay informed, stay secure.**

CyberDart Team

---

### References:

- For more detailed information on PS5 and PS4 hacking developments, visit the **[PSDev Wiki](https://psdev.wiki)**. This valuable resource provides extensive information about PlayStation hardware and software, including exploits, reverse engineering efforts, and security research.
