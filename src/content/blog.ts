export type BlogCategory = "gulf-job-tips" | "resume-writing" | "visa-work-permits" | "interview-prep";

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	category: BlogCategory;
	categoryLabel: string;
	date: string; // ISO date string
	readTime: number; // minutes
	content: string; // HTML content
};

export const categoryLabels: Record<BlogCategory, string> = {
	"gulf-job-tips": "Gulf Job Tips",
	"resume-writing": "Resume Writing",
	"visa-work-permits": "Visa & Work Permits",
	"interview-prep": "Interview Prep",
};

export const blogPosts: BlogPost[] = [
	{
		slug: "top-10-tips-landing-job-in-gulf",
		title: "Top 10 Tips for Landing a Job in the Gulf",
		excerpt:
			"The Gulf job market is competitive but full of opportunity. Here are proven strategies to help you stand out and secure your next role in the GCC.",
		category: "gulf-job-tips",
		categoryLabel: "Gulf Job Tips",
		date: "2026-03-01",
		readTime: 8,
		content: `
<p>The Gulf Cooperation Council (GCC) countries — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman — continue to attract professionals from around the world. With Vision 2030 driving transformation in Saudi Arabia and massive infrastructure projects across the region, opportunities are abundant. Here's how to position yourself for success.</p>

<h2>1. Tailor Your CV to Gulf Standards</h2>
<p>Gulf employers expect specific details that Western CVs often omit. Include your nationality, visa status, date of birth, and marital status. A professional photo is standard practice. HireGulf's templates include all these fields by default.</p>

<h2>2. Research Salary Expectations</h2>
<p>Salaries in the Gulf are typically tax-free, but cost of living varies dramatically between cities. Dubai and Doha tend to be more expensive than Riyadh or Muscat. Research salary ranges on platforms like GulfTalent, Bayt, and LinkedIn before negotiations.</p>

<h2>3. Network Through LinkedIn</h2>
<p>LinkedIn is the primary professional networking tool in the Gulf. Optimize your profile, connect with recruiters specializing in GCC placements, and engage with content related to your industry in the region.</p>

<h2>4. Understand Sponsorship Requirements</h2>
<p>Most Gulf countries require employer sponsorship for work visas. Ensure you understand the process for your target country. Saudi Arabia's recent reforms have made it easier to switch employers, while the UAE offers various visa categories including freelance permits.</p>

<h2>5. Learn Basic Arabic Phrases</h2>
<p>While English is widely used in business, knowing basic Arabic phrases shows cultural respect and can give you an edge. Even simple greetings like "As-salamu alaykum" and "Shukran" make a positive impression.</p>

<h2>6. Target In-Demand Industries</h2>
<p>The Gulf is investing heavily in technology, healthcare, renewable energy, tourism, and entertainment. Sectors aligned with national transformation plans (like Saudi Vision 2030 or UAE's Operation 300bn) offer the strongest job prospects.</p>

<h2>7. Use Gulf-Specific Job Boards</h2>
<p>Beyond LinkedIn, use regional platforms like GulfTalent, Bayt.com, Naukri Gulf, and Indeed Gulf. Many companies in the region post exclusively on these platforms.</p>

<h2>8. Prepare for a Longer Hiring Timeline</h2>
<p>Hiring in the Gulf can take 4-12 weeks from application to offer. Government roles may take even longer. Be patient and keep multiple applications active simultaneously.</p>

<h2>9. Get Your Documents Attested</h2>
<p>Most Gulf countries require educational certificates to be attested by your home country's foreign affairs ministry and the destination country's embassy. Start this process early — it can take several weeks.</p>

<h2>10. Consider Contract Terms Carefully</h2>
<p>Gulf employment contracts typically include housing allowance, transportation, annual flights home, and medical insurance. Don't just focus on base salary — evaluate the full package, including end-of-service benefits (gratuity).</p>
`,
	},
	{
		slug: "gulf-cv-vs-western-cv-key-differences",
		title: "Gulf CV vs. Western CV: Key Differences You Must Know",
		excerpt:
			"Applying to Gulf jobs with a Western-style CV? You might be missing critical details that Gulf employers expect. Learn what to include and what to change.",
		category: "resume-writing",
		categoryLabel: "Resume Writing",
		date: "2026-02-25",
		readTime: 6,
		content: `
<p>If you're applying for jobs in the Gulf region using the same CV you'd submit in Europe or North America, you're likely missing critical elements. Gulf employers have different expectations, and understanding these differences can mean the difference between getting shortlisted or overlooked.</p>

<h2>Personal Information</h2>
<p>This is the biggest difference. Gulf CVs typically include:</p>
<ul>
<li><strong>Nationality</strong> — Required by most employers for visa and sponsorship purposes</li>
<li><strong>Date of birth</strong> — Standard practice in the region</li>
<li><strong>Marital status</strong> — Often included, especially for roles that include family benefits</li>
<li><strong>Visa status</strong> — Crucial for employers to know if you're already in-country or need sponsorship</li>
<li><strong>Professional photo</strong> — Expected on most Gulf CVs, unlike many Western markets</li>
</ul>

<h2>CV Length</h2>
<p>While Western CVs often aim for 1-2 pages, Gulf employers are more accepting of 2-3 page CVs, especially for senior roles. They want comprehensive detail about your experience and qualifications.</p>

<h2>Language</h2>
<p>English is the primary business language across the Gulf, but having an Arabic version of your CV can be a significant advantage, especially for government and public sector roles. HireGulf supports bilingual CV creation in Arabic and English.</p>

<h2>References</h2>
<p>Gulf employers often want references listed directly on the CV, not just "available upon request." Include 2-3 professional references with their contact details.</p>

<h2>Education Details</h2>
<p>Include the full name of your university, the country, and the year of graduation. Mention if your degree is from a recognized international institution — this carries weight in Gulf hiring.</p>

<h2>Formatting Tips for Gulf CVs</h2>
<ul>
<li>Use a clean, professional template (avoid overly creative designs for corporate roles)</li>
<li>Include a professional summary at the top highlighting your Gulf relevance</li>
<li>List certifications prominently — professional certifications are highly valued</li>
<li>Mention any Gulf experience first, as regional experience is preferred</li>
</ul>
`,
	},
	{
		slug: "work-visa-guide-saudi-uae-qatar",
		title: "Work Visa Guide: Saudi Arabia, UAE & Qatar in 2026",
		excerpt:
			"Navigating Gulf work visas can be confusing. This guide breaks down the visa process for the three largest Gulf job markets.",
		category: "visa-work-permits",
		categoryLabel: "Visa & Work Permits",
		date: "2026-02-18",
		readTime: 10,
		content: `
<p>Understanding work visa requirements is essential before applying for Gulf jobs. Each country has its own process, and recent reforms have made some systems more flexible. Here's what you need to know for 2026.</p>

<h2>Saudi Arabia</h2>
<h3>Standard Work Visa (Iqama)</h3>
<p>The most common route for expat workers. Your employer sponsors the visa and handles most of the paperwork. Key requirements:</p>
<ul>
<li>Valid passport (at least 6 months validity)</li>
<li>Attested educational certificates</li>
<li>Medical fitness certificate</li>
<li>Police clearance certificate</li>
<li>Employment contract signed by both parties</li>
</ul>
<p>Saudi Arabia's labor reforms now allow workers to change employers without the previous employer's consent after completing one year of service, making the job market more flexible than ever.</p>

<h3>Premium Residency</h3>
<p>Saudi Arabia offers a Premium Residency (similar to a green card) for highly skilled professionals and investors. This doesn't require employer sponsorship and allows you to work independently.</p>

<h2>United Arab Emirates</h2>
<h3>Employment Visa</h3>
<p>The standard employer-sponsored visa. The process typically takes 2-4 weeks:</p>
<ul>
<li>Employer applies for an entry permit</li>
<li>You enter the UAE on the entry permit</li>
<li>Medical examination and Emirates ID registration</li>
<li>Visa stamped in your passport</li>
</ul>

<h3>Golden Visa</h3>
<p>The UAE's long-term residency visa (5 or 10 years) is available for investors, entrepreneurs, scientists, outstanding students, and skilled professionals. It doesn't require employer sponsorship.</p>

<h3>Freelance Permit</h3>
<p>Several UAE free zones offer freelance permits, allowing you to work independently. Popular options include Dubai's Freelancer Licence and Abu Dhabi's Hub71.</p>

<h2>Qatar</h2>
<h3>Work Visa</h3>
<p>Qatar has streamlined its visa process significantly:</p>
<ul>
<li>Employer obtains a work permit from the Ministry of Labour</li>
<li>Entry visa is issued</li>
<li>Residence permit (QID) is obtained after arrival</li>
<li>Medical examination required</li>
</ul>
<p>Qatar's labor reforms removed the exit permit requirement and introduced a minimum wage, improving worker protections across the board.</p>

<h2>General Tips</h2>
<ul>
<li><strong>Start early</strong> — Document attestation alone can take 4-6 weeks</li>
<li><strong>Keep multiple copies</strong> — Have both physical and digital copies of all documents</li>
<li><strong>Check specific requirements</strong> — Requirements can vary by nationality and profession</li>
<li><strong>Budget for costs</strong> — While employers typically cover visa costs, document attestation and medical exams may be your responsibility</li>
</ul>
`,
	},
	{
		slug: "ace-your-gulf-job-interview",
		title: "How to Ace Your Gulf Job Interview (Remote & In-Person)",
		excerpt:
			"Gulf interviews have unique cultural expectations. From dress code to negotiation etiquette, here's everything you need to know.",
		category: "interview-prep",
		categoryLabel: "Interview Prep",
		date: "2026-02-10",
		readTime: 7,
		content: `
<p>Interviewing for a Gulf position — whether remotely or in person — requires understanding the region's business culture and expectations. Here's how to prepare and make a strong impression.</p>

<h2>Before the Interview</h2>
<h3>Research the Company</h3>
<p>Go beyond the company website. Understand how the company fits into the country's national development plans (Vision 2030, etc.). Showing awareness of the broader economic context demonstrates genuine interest in the region.</p>

<h3>Dress Code</h3>
<p>Gulf business culture tends to be formal. For in-person interviews:</p>
<ul>
<li><strong>Men</strong>: Dark suit and tie, even if the company is "business casual"</li>
<li><strong>Women</strong>: Conservative professional attire, covering shoulders and knees</li>
<li>For video interviews, dress as formally as you would in person</li>
</ul>

<h2>During the Interview</h2>
<h3>Cultural Etiquette</h3>
<ul>
<li>Greet with "As-salamu alaykum" — it's appreciated regardless of the interviewer's background</li>
<li>Accept tea or coffee if offered during in-person interviews — refusing can be considered impolite</li>
<li>Small talk at the beginning is common and expected. Don't rush to business topics</li>
<li>Be respectful of hierarchy — address senior interviewers formally</li>
</ul>

<h3>Common Questions Unique to Gulf Interviews</h3>
<ul>
<li>"Why do you want to work in [country]?" — Show genuine interest in the region, not just the salary</li>
<li>"How long do you plan to stay?" — Employers prefer commitment of 2+ years minimum</li>
<li>"Do you have family?" — This is normal in Gulf interviews and relates to benefits packages</li>
<li>"What is your current visa status?" — Be transparent about your situation</li>
</ul>

<h3>Highlighting Gulf-Relevant Experience</h3>
<p>If you have previous Gulf experience, emphasize it. If not, highlight:</p>
<ul>
<li>Experience working in multicultural teams</li>
<li>Adaptability and international work experience</li>
<li>Any knowledge of Arabic or the region</li>
<li>Understanding of Gulf business practices</li>
</ul>

<h2>Salary Negotiation</h2>
<p>Gulf compensation packages go far beyond base salary. When negotiating, consider:</p>
<ul>
<li><strong>Housing allowance</strong> — Often 25-35% of base salary, or company-provided housing</li>
<li><strong>Transportation</strong> — Car allowance or company vehicle</li>
<li><strong>Annual flights</strong> — Return flights to your home country for you and dependents</li>
<li><strong>Medical insurance</strong> — Coverage level and whether it includes family</li>
<li><strong>Education allowance</strong> — For children's school fees</li>
<li><strong>End-of-service gratuity</strong> — Typically 21-30 days of salary per year of service</li>
</ul>

<h2>After the Interview</h2>
<p>Send a brief thank-you email within 24 hours. Keep it professional and concise. If you don't hear back within the expected timeframe, one polite follow-up is acceptable. Remember that Gulf hiring timelines tend to be longer than Western markets.</p>
`,
	},
	{
		slug: "saudization-nitaqat-what-expats-need-to-know",
		title: "Saudization & Nitaqat: What Expats Need to Know in 2026",
		excerpt:
			"Saudi Arabia's nationalization policies are reshaping the job market. Understand which roles are affected and how to stay competitive as an expat.",
		category: "gulf-job-tips",
		categoryLabel: "Gulf Job Tips",
		date: "2026-02-03",
		readTime: 7,
		content: `
<p>Saudization (also known as Nitaqat) is Saudi Arabia's labor nationalization policy that requires companies to employ a certain percentage of Saudi nationals. Understanding this system is crucial for expats seeking or maintaining employment in the Kingdom.</p>

<h2>How Nitaqat Works</h2>
<p>The Nitaqat system categorizes companies into color-coded bands based on their Saudization levels:</p>
<ul>
<li><strong>Platinum</strong> — Exceeds Saudization requirements (most benefits and flexibility)</li>
<li><strong>Green</strong> — Meets requirements (standard operations)</li>
<li><strong>Yellow</strong> — Below requirements (restricted from some services)</li>
<li><strong>Red</strong> — Significantly below requirements (severe restrictions)</li>
</ul>
<p>Companies in red and yellow zones face restrictions on hiring new expats and renewing existing work permits.</p>

<h2>Roles Reserved for Saudi Nationals</h2>
<p>As of 2026, several roles are fully or partially Saudized:</p>
<ul>
<li>HR positions in companies with 50+ employees</li>
<li>Accounting and finance roles (partially)</li>
<li>Customer service and call center positions</li>
<li>Retail sales positions</li>
<li>Government sector roles</li>
<li>Certain healthcare administrative positions</li>
</ul>
<p>The list continues to expand, so always check the latest Ministry of Human Resources announcements.</p>

<h2>How Expats Can Stay Competitive</h2>
<h3>1. Specialize in High-Demand Skills</h3>
<p>Roles requiring specialized technical expertise — AI/ML engineering, cybersecurity, advanced healthcare, and niche engineering fields — remain in high demand for expats due to skills gaps.</p>

<h3>2. Target Companies in Platinum/Green Bands</h3>
<p>These companies have more flexibility to hire and retain expat workers. Large multinationals and companies in special economic zones often have higher quotas.</p>

<h3>3. Consider Emerging Sectors</h3>
<p>Saudi Arabia's giga-projects (NEOM, The Line, Red Sea Global) and Vision 2030 entertainment and tourism initiatives are creating thousands of roles that require international expertise.</p>

<h3>4. Upskill Continuously</h3>
<p>Professional certifications, especially from recognized international bodies, strengthen your position. PMP, CFA, AWS certifications, and similar credentials are highly valued.</p>

<h3>5. Build Local Networks</h3>
<p>Strong professional networks in-country can alert you to opportunities before they're publicly listed and provide referrals that carry significant weight.</p>

<h2>The Bigger Picture</h2>
<p>Saudization isn't about removing expats — it's about creating a more balanced workforce. Expats who bring specialized skills, international experience, and a willingness to mentor local talent continue to be valued across the Kingdom.</p>
`,
	},
	{
		slug: "best-resume-format-for-gulf-employers",
		title: "The Best Resume Format for Gulf Employers",
		excerpt:
			"Chronological, functional, or combination? Learn which resume format Gulf hiring managers prefer and how to structure yours for maximum impact.",
		category: "resume-writing",
		categoryLabel: "Resume Writing",
		date: "2026-01-28",
		readTime: 5,
		content: `
<p>Choosing the right resume format can significantly impact your chances with Gulf employers. While there's no one-size-fits-all answer, understanding regional preferences will help you make the right choice.</p>

<h2>The Preferred Format: Reverse Chronological</h2>
<p>Gulf employers overwhelmingly prefer the reverse chronological format. This lists your most recent experience first and works backward. It's straightforward, easy to scan, and shows career progression clearly.</p>

<h2>Ideal Gulf Resume Structure</h2>
<ol>
<li><strong>Personal Information & Photo</strong> — Name, contact details, nationality, visa status, DOB, marital status, professional photo</li>
<li><strong>Professional Summary</strong> — 3-4 sentences highlighting your key qualifications and Gulf relevance</li>
<li><strong>Work Experience</strong> — Reverse chronological, with quantified achievements</li>
<li><strong>Education</strong> — Degrees, institutions, countries, graduation years</li>
<li><strong>Certifications & Training</strong> — Professional certifications (highly valued in the Gulf)</li>
<li><strong>Skills</strong> — Technical and soft skills, language proficiencies</li>
<li><strong>References</strong> — 2-3 professional references with contact details</li>
</ol>

<h2>Formatting Tips</h2>
<ul>
<li><strong>Length</strong>: 2-3 pages is acceptable, especially for senior roles</li>
<li><strong>Font</strong>: Use clean, professional fonts (Arial, Calibri, or similar)</li>
<li><strong>File format</strong>: PDF is preferred — it preserves formatting across devices</li>
<li><strong>File name</strong>: Use "FirstName_LastName_CV.pdf" format</li>
</ul>

<h2>When to Use Other Formats</h2>
<p><strong>Combination/Hybrid</strong>: Good for career changers moving to Gulf markets. Lead with a skills section, then chronological experience.</p>
<p><strong>Functional</strong>: Rarely recommended for Gulf applications. Employers may see it as hiding employment gaps.</p>

<h2>Common Mistakes to Avoid</h2>
<ul>
<li>Using a one-page Western-style CV for senior roles</li>
<li>Omitting personal details (nationality, visa status) that Gulf employers expect</li>
<li>Generic objective statements instead of tailored professional summaries</li>
<li>Not mentioning Gulf-specific experience or knowledge prominently</li>
<li>Leaving out certifications — they matter more in the Gulf than in many Western markets</li>
</ul>

<p>HireGulf's templates are pre-built with Gulf conventions in mind, including dedicated fields for nationality, visa status, and other region-specific details. Try our Khaleeji template for a design that's specifically optimized for Gulf applications.</p>
`,
	},
];

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getLatestPosts(count: number): BlogPost[] {
	return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
	return blogPosts.filter((post) => post.category === category);
}
