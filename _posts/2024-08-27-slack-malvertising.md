# Malvertising: Slack

Malvertising, the practice of using online advertisements to distribute malware, represents a significant threat in the cybersecurity landscape. This technique disguises malicious software as legitimate applications through seemingly innocuous ads, exploiting the inherent trust users place in advertisements on reputable platforms. As a result, attackers can bypass many traditional security defenses.

## A Notorious Campaign Targeting Slack

Recently, a sophisticated malvertising campaign targeted Slack, a popular communication tool. For several days, a Google ad for Slack appeared prominently when users searched for the term "Slack." At first glance, the ad appeared genuine, featuring branding and language consistent with Slack’s official marketing materials. However, beneath this veneer of legitimacy, there were clear indicators of malicious intent.

The advertiser was promoting products that seemed aimed at the Asian market, with the Slack ad showing up oddly among them. This mismatch, coupled with the advertiser being listed as CVC International Limited—an entity with no connection to Slack—was pretty weird, right?

## Slow and Steady Wins the Race

Going fast isn’t always the best strategy—sometimes, taking it slow is the key to success. Many cybercriminals wait weeks or even months, flying under the radar before launching their final attack. In this case, the attackers used this slow-and-steady approach to perfection.

Initially, clicking on the ad redirected users to the legitimate Slack website. This initial redirection was a deliberate strategy to avoid immediate detection and scrutiny. As time passed, the ad’s behavior gradually changed. Instead of leading directly to Slack’s website, it began redirecting users to a click tracker before reaching the final destination. Click trackers, commonly used in malvertising campaigns, obscure the true URL and filter clicks, making it difficult to trace the final destination of the ad traffic.

Eventually, the ad’s final URL shifted to `slack-windows-download[.]com`, a newly created domain for this campaign. Initially, this domain displayed a decoy page designed to mimic Slack’s official download page. This technique, known as cloaking, involves showing different content to users based on various conditions. Here, cloaking kept the malicious content hidden

behind layers of deception, making it challenging for automated systems and security analysts to detect the threat.

## Understanding Cloaking

Cloaking is a sophisticated evasion technique used by attackers to obfuscate the true nature of their malicious content. By dynamically altering the content presented to users based on factors such as their behavior, geographic location, or system characteristics, attackers can effectively hide their intentions.

In this campaign, cloaking was employed to initially present a seemingly benign page. The actual malicious content was only revealed under specific conditions, such as when certain criteria were met. This technique adds a significant layer of complexity to the detection process, requiring detailed analysis of the ad’s redirection chain and user interaction patterns. Automated detection tools often struggle with cloaking due to its reliance on conditional content delivery, making it a formidable challenge for security systems to flag malicious activity.

## Threat Actors

The malicious page at `slack-windows-download[.]com` hosted a download button that triggered a file download from another domain. This file, disguised as a Slack installer, was actually a trojan. Once executed, the trojan established a remote connection to a command and control server.

Dynamic analysis of the trojan revealed a connection to a server previously linked to SecTopRAT, a remote access trojan known for its data-stealing capabilities. This association suggests that the trojan was designed to exfiltrate sensitive information from compromised systems, highlighting the severity and sophistication of this malvertising campaign. The involvement of SecTopRAT underscores the increasing complexity and potential impact of modern cyber threats, emphasizing the need for advanced detection and defense mechanisms.

## Response and Conclusion

In response to this threat, cybersecurity firm Malwarebytes has enhanced its detection coverage and reported the malicious ad to Google. Cloudflare has also flagged the decoy domains as phishing sites. Despite these efforts, malvertisers continue to exploit both free and paid platforms to evade detection, demonstrating patience and strategic planning in their campaigns.

As they say, “Be careful where you put your money.” The same goes for what you click, since clicking the wrong link can lead to losing a lot more than just money. Stay sharp, verify the legitimacy of ads and websites, and protect yourself from the ever-evolving landscape of cyber threats.

**Stay informed, stay secure.**

CyberDart Team
