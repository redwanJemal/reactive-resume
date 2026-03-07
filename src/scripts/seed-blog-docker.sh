#!/bin/bash
# Seed blog posts via psql inside the postgres container
AUTHOR_ID=$(docker exec noorcv-postgres psql -U noorcv -d noorcv -t -c "SELECT id FROM \"user\" LIMIT 1;" | tr -d ' \n')

if [ -z "$AUTHOR_ID" ]; then
  echo "No user found in database"
  exit 1
fi

echo "Seeding blog posts for author: $AUTHOR_ID"

docker exec -i noorcv-postgres psql -U noorcv -d noorcv <<'EOSQL'
-- Blog post 1
INSERT INTO blog_post (slug, title, excerpt, category, category_label, content, read_time, is_published, author_id)
SELECT 'top-10-tips-landing-job-in-gulf',
  'Top 10 Tips for Landing a Job in the Gulf',
  'The Gulf job market is competitive but full of opportunity. Here are proven strategies to help you stand out and secure your next role in the GCC.',
  'gulf-job-tips', 'Gulf Job Tips',
  '<p>The Gulf Cooperation Council (GCC) countries — Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman — continue to attract professionals from around the world. With Vision 2030 driving transformation in Saudi Arabia and massive infrastructure projects across the region, opportunities are abundant.</p><h2>1. Tailor Your CV to Gulf Standards</h2><p>Gulf employers expect specific details that Western CVs often omit. Include your nationality, visa status, date of birth, and marital status. A professional photo is standard practice.</p><h2>2. Research Salary Expectations</h2><p>Salaries in the Gulf are typically tax-free, but cost of living varies dramatically between cities.</p><h2>3. Network Through LinkedIn</h2><p>LinkedIn is the primary professional networking tool in the Gulf.</p><h2>4. Understand Sponsorship Requirements</h2><p>Most Gulf countries require employer sponsorship for work visas.</p><h2>5. Learn Basic Arabic Phrases</h2><p>While English is widely used in business, knowing basic Arabic phrases shows cultural respect.</p><h2>6. Target In-Demand Industries</h2><p>The Gulf is investing heavily in technology, healthcare, renewable energy, tourism, and entertainment.</p><h2>7. Use Gulf-Specific Job Boards</h2><p>Beyond LinkedIn, use regional platforms like GulfTalent, Bayt.com, Naukri Gulf, and Indeed Gulf.</p><h2>8. Prepare for a Longer Hiring Timeline</h2><p>Hiring in the Gulf can take 4-12 weeks from application to offer.</p><h2>9. Get Your Documents Attested</h2><p>Most Gulf countries require educational certificates to be attested.</p><h2>10. Consider Contract Terms Carefully</h2><p>Gulf employment contracts typically include housing allowance, transportation, annual flights home, and medical insurance.</p>',
  8, true, id
FROM "user" LIMIT 1
ON CONFLICT (slug) DO NOTHING;

-- Blog post 2
INSERT INTO blog_post (slug, title, excerpt, category, category_label, content, read_time, is_published, author_id)
SELECT 'gulf-cv-vs-western-cv-key-differences',
  'Gulf CV vs. Western CV: Key Differences You Must Know',
  'Applying to Gulf jobs with a Western-style CV? You might be missing critical details that Gulf employers expect.',
  'resume-writing', 'Resume Writing',
  '<p>If you''re applying for jobs in the Gulf region using the same CV you''d submit in Europe or North America, you''re likely missing critical elements.</p><h2>Personal Information</h2><p>Gulf CVs typically include nationality, date of birth, marital status, visa status, and a professional photo.</p><h2>CV Length</h2><p>While Western CVs often aim for 1-2 pages, Gulf employers are more accepting of 2-3 page CVs.</p><h2>Language</h2><p>English is the primary business language across the Gulf, but having an Arabic version can be a significant advantage.</p><h2>References</h2><p>Gulf employers often want references listed directly on the CV.</p><h2>Formatting Tips for Gulf CVs</h2><ul><li>Use a clean, professional template</li><li>Include a professional summary highlighting your Gulf relevance</li><li>List certifications prominently</li><li>Mention any Gulf experience first</li></ul>',
  6, true, id
FROM "user" LIMIT 1
ON CONFLICT (slug) DO NOTHING;

-- Blog post 3
INSERT INTO blog_post (slug, title, excerpt, category, category_label, content, read_time, is_published, author_id)
SELECT 'work-visa-guide-saudi-uae-qatar',
  'Work Visa Guide: Saudi Arabia, UAE & Qatar in 2026',
  'Navigating Gulf work visas can be confusing. This guide breaks down the visa process for the three largest Gulf job markets.',
  'visa-work-permits', 'Visa & Work Permits',
  '<p>Understanding work visa requirements is essential before applying for Gulf jobs.</p><h2>Saudi Arabia</h2><h3>Standard Work Visa (Iqama)</h3><p>Your employer sponsors the visa and handles most of the paperwork. Key requirements include valid passport, attested certificates, medical fitness certificate, and police clearance.</p><h3>Premium Residency</h3><p>Saudi Arabia offers a Premium Residency for highly skilled professionals.</p><h2>United Arab Emirates</h2><h3>Employment Visa</h3><p>The standard employer-sponsored visa takes 2-4 weeks.</p><h3>Golden Visa</h3><p>The UAE''s long-term residency visa (5 or 10 years) is available for investors and skilled professionals.</p><h2>Qatar</h2><h3>Work Visa</h3><p>Qatar has streamlined its visa process significantly with recent reforms.</p><h2>General Tips</h2><ul><li>Start early — Document attestation can take 4-6 weeks</li><li>Keep multiple copies of all documents</li><li>Check specific requirements for your nationality</li></ul>',
  10, true, id
FROM "user" LIMIT 1
ON CONFLICT (slug) DO NOTHING;

-- Blog post 4
INSERT INTO blog_post (slug, title, excerpt, category, category_label, content, read_time, is_published, author_id)
SELECT 'ace-your-gulf-job-interview',
  'How to Ace Your Gulf Job Interview (Remote & In-Person)',
  'Gulf interviews have unique cultural expectations. From dress code to negotiation etiquette, here is everything you need to know.',
  'interview-prep', 'Interview Prep',
  '<p>Interviewing for a Gulf position requires understanding the region''s business culture and expectations.</p><h2>Before the Interview</h2><h3>Research the Company</h3><p>Understand how the company fits into national development plans like Vision 2030.</p><h3>Dress Code</h3><p>Gulf business culture tends to be formal. Dark suit and tie for men, conservative professional attire for women.</p><h2>During the Interview</h2><h3>Cultural Etiquette</h3><ul><li>Greet with "As-salamu alaykum"</li><li>Accept tea or coffee if offered</li><li>Small talk at the beginning is expected</li></ul><h2>Salary Negotiation</h2><p>Consider the full package: housing allowance, transportation, annual flights, medical insurance, education allowance, and end-of-service gratuity.</p>',
  7, true, id
FROM "user" LIMIT 1
ON CONFLICT (slug) DO NOTHING;

-- Blog post 5
INSERT INTO blog_post (slug, title, excerpt, category, category_label, content, read_time, is_published, author_id)
SELECT 'saudization-nitaqat-what-expats-need-to-know',
  'Saudization & Nitaqat: What Expats Need to Know in 2026',
  'Saudi Arabia''s nationalization policies are reshaping the job market. Understand which roles are affected and how to stay competitive as an expat.',
  'gulf-job-tips', 'Gulf Job Tips',
  '<p>Saudization (also known as Nitaqat) is Saudi Arabia''s labor nationalization policy that requires companies to employ a certain percentage of Saudi nationals.</p><h2>How Nitaqat Works</h2><p>The system categorizes companies into Platinum, Green, Yellow, and Red bands based on Saudization levels.</p><h2>Roles Reserved for Saudi Nationals</h2><p>HR positions, accounting roles, customer service, retail sales, and government sector roles are fully or partially Saudized.</p><h2>How Expats Can Stay Competitive</h2><ul><li>Specialize in high-demand skills like AI/ML, cybersecurity</li><li>Target companies in Platinum/Green bands</li><li>Consider emerging sectors like NEOM and Red Sea Global</li><li>Upskill continuously with professional certifications</li><li>Build local professional networks</li></ul>',
  7, true, id
FROM "user" LIMIT 1
ON CONFLICT (slug) DO NOTHING;

-- Blog post 6
INSERT INTO blog_post (slug, title, excerpt, category, category_label, content, read_time, is_published, author_id)
SELECT 'best-resume-format-for-gulf-employers',
  'The Best Resume Format for Gulf Employers',
  'Chronological, functional, or combination? Learn which resume format Gulf hiring managers prefer and how to structure yours for maximum impact.',
  'resume-writing', 'Resume Writing',
  '<p>Choosing the right resume format can significantly impact your chances with Gulf employers.</p><h2>The Preferred Format: Reverse Chronological</h2><p>Gulf employers overwhelmingly prefer the reverse chronological format.</p><h2>Ideal Gulf Resume Structure</h2><ol><li>Personal Information & Photo</li><li>Professional Summary</li><li>Work Experience</li><li>Education</li><li>Certifications & Training</li><li>Skills</li><li>References</li></ol><h2>Formatting Tips</h2><ul><li>Length: 2-3 pages is acceptable</li><li>Font: Use clean, professional fonts</li><li>File format: PDF is preferred</li><li>File name: Use FirstName_LastName_CV.pdf format</li></ul><h2>Common Mistakes to Avoid</h2><ul><li>Using a one-page Western-style CV for senior roles</li><li>Omitting personal details that Gulf employers expect</li><li>Generic objective statements</li><li>Not mentioning Gulf experience prominently</li></ul>',
  5, true, id
FROM "user" LIMIT 1
ON CONFLICT (slug) DO NOTHING;
EOSQL

echo "Blog seeding complete!"
docker exec noorcv-postgres psql -U noorcv -d noorcv -c "SELECT slug, title FROM blog_post ORDER BY created_at;"
