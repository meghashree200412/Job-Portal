
// ===== Local Storage Utilities =====
function getJobs() {
  try {
    return JSON.parse(localStorage.getItem('ch_jobs')) || [];
  } catch (e) {
    return [];
  }
}

function setJobs(jobs) {
  localStorage.setItem('ch_jobs', JSON.stringify(jobs));
}

function getApps() {
  try {
    return JSON.parse(localStorage.getItem('ch_apps')) || [];
  } catch (e) {
    return [];
  }
}

function setApps(apps) {
  localStorage.setItem('ch_apps', JSON.stringify(apps));
}
// --- Hamburger Menu Toggle ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
  });
}


// ===== Seed Data (if empty) =====
if (!localStorage.getItem('ch_jobs')) {
  const seed = [
    { title: 'Frontend Developer', company: 'SaiKet Systems', location: 'Bengaluru', type: 'Full-time', posted: '2 days ago' },
    { title: 'Backend Developer', company: 'CodeWave', location: 'Mumbai', type: 'Full-time', posted: '3 days ago' },
    { title: 'UI/UX Designer', company: 'DesignPro', location: 'Delhi', type: 'Full-time', posted: '1 week ago' },
    { title: 'Data Analyst', company: 'InsightCo', location: 'Pune', type: 'Full-time', posted: '4 days ago' },
    { title: 'DevOps Engineer', company: 'CloudOps', location: 'Hyderabad', type: 'Full-time', posted: '5 days ago' },
    { title: 'Mobile App Developer', company: 'AppWorks', location: 'Bengaluru', type: 'Part-time', posted: '2 days ago' },
    { title: 'QA Tester', company: 'BugFree', location: 'Chennai', type: 'Contract', posted: '3 days ago' },
    { title: 'Machine Learning Engineer', company: 'SmartAI', location: 'Bengaluru', type: 'Full-time', posted: '6 days ago' },
    { title: 'System Administrator', company: 'NetSecure', location: 'Pune', type: 'Full-time', posted: '2 days ago' },
    { title: 'Product Manager', company: 'Prodify', location: 'Mumbai', type: 'Full-time', posted: '4 days ago' },
    { title: 'Technical Writer', company: 'DocuLabs', location: 'Remote', type: 'Part-time', posted: '1 day ago' },
    { title: 'Graphic Designer', company: 'CreativeCo', location: 'Bengaluru', type: 'Contract', posted: '3 days ago' },
    { title: 'Cloud Architect', company: 'SkyNet', location: 'Hyderabad', type: 'Full-time', posted: '1 week ago' },
    { title: 'React Developer', company: 'PixelLabs', location: 'Pune', type: 'Full-time', posted: '2 days ago' },
    { title: 'Business Analyst', company: 'Analytica', location: 'Delhi', type: 'Full-time', posted: '5 days ago' },
    { title: 'Full Stack Developer', company: 'CloudCore', location: 'Bengaluru', type: 'Full-time', posted: '2 days ago' },
    { title: 'SEO Specialist', company: 'SearchPro', location: 'Mumbai', type: 'Part-time', posted: '4 days ago' },
    { title: 'Data Engineer', company: 'DataWorks', location: 'Pune', type: 'Full-time', posted: '6 days ago' },
    { title: 'Support Engineer', company: 'HelpDesk', location: 'Chennai', type: 'Contract', posted: '2 days ago' },
    { title: 'Embedded Systems Engineer', company: 'EmbedTech', location: 'Bengaluru', type: 'Full-time', posted: '3 days ago' },

    // 🆕 Added more job cards
    { title: 'Cybersecurity Specialist', company: 'SecureNet', location: 'Hyderabad', type: 'Full-time', posted: '1 week ago' },
    { title: 'AI Research Intern', company: 'NeuroAI Labs', location: 'Remote', type: 'Internship', posted: '2 days ago' },
    { title: 'Blockchain Developer', company: 'ChainTech', location: 'Pune', type: 'Full-time', posted: '4 days ago' },
    { title: 'Game Developer', company: 'PlayForge', location: 'Bengaluru', type: 'Full-time', posted: '3 days ago' },
    { title: 'Digital Marketing Executive', company: 'AdWave', location: 'Mumbai', type: 'Part-time', posted: '2 days ago' },
    { title: 'Cloud Support Associate', company: 'AWSmart', location: 'Delhi', type: 'Full-time', posted: '1 week ago' },
    { title: 'IoT Engineer', company: 'Connectify', location: 'Chennai', type: 'Full-time', posted: '5 days ago' },
    { title: '3D Animator', company: 'MotionFX', location: 'Bengaluru', type: 'Contract', posted: '2 days ago' },
    { title: 'Project Coordinator', company: 'PMWorks', location: 'Hyderabad', type: 'Full-time', posted: '6 days ago' },
    { title: 'Technical Support Intern', company: 'HelpLink', location: 'Remote', type: 'Internship', posted: '3 days ago' },
    { title: 'Network Engineer', company: 'WireNet', location: 'Pune', type: 'Full-time', posted: '5 days ago' },
    { title: 'Data Scientist', company: 'BrainTech', location: 'Bengaluru', type: 'Full-time', posted: '1 week ago' },
    { title: 'Content Strategist', company: 'MediaLabs', location: 'Mumbai', type: 'Part-time', posted: '2 days ago' },
    { title: 'Automation Engineer', company: 'AutoSys', location: 'Delhi', type: 'Full-time', posted: '3 days ago' },
    { title: 'IT Support Specialist', company: 'TechServe', location: 'Chennai', type: 'Full-time', posted: '4 days ago' }
  ];
  setJobs(seed);
}

// ===== Job Rendering =====
function renderJobs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const jobs = getJobs();
  container.innerHTML = '';

  jobs.forEach((job, idx) => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <h3>${escapeHtml(job.title)}</h3>
      <div class="job-meta">
        ${escapeHtml(job.company)} • ${escapeHtml(job.location)} • ${escapeHtml(job.type)}
        <br><small>Posted: ${escapeHtml(job.posted || '')}</small>
      </div>
      <div class="card-actions">
        <button class="btn primary" onclick="openApply(${idx})">Apply Now</button>
        <button class="btn ghost" onclick="saveJob(${idx})">Save</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===== Job Filtering =====
function filterJobGrid(containerId, searchId, typeId, locId) {
  const q = (document.getElementById(searchId)?.value || '').toLowerCase();
  const type = (document.getElementById(typeId)?.value || '').toLowerCase();
  const loc = (document.getElementById(locId)?.value || '').toLowerCase();
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll('.job-card').forEach(card => {
    const title = (card.querySelector('h3')?.innerText || '').toLowerCase();
    const meta = (card.querySelector('.job-meta')?.innerText || '').toLowerCase();
    const matches =
      (q === '' || title.includes(q) || meta.includes(q)) &&
      (type === '' || meta.includes(type)) &&
      (loc === '' || meta.includes(loc));

    card.style.display = matches ? 'block' : 'none';
  });
}

// ===== Application Handling =====
function openApply(idx) {
  const jobs = getJobs();
  if (!jobs[idx]) return;

  const popup = document.getElementById('applyPopup');
  popup.dataset.job = idx;
  document.getElementById('applyJobTitle').innerText = `${jobs[idx].title} — ${jobs[idx].company}`;
  popup.classList.add('show');
}

function submitApply(e) {
  e.preventDefault();

  const popup = document.getElementById('applyPopup');
  const idx = parseInt(popup.dataset.job || '0', 10);
  const name = document.getElementById('appName').value.trim();
  const email = document.getElementById('appEmail').value.trim();

  if (!name || !email) {
    alert('Enter name & email');
    return;
  }

  const apps = getApps();
  const jobs = getJobs();

  apps.push({
    job: jobs[idx].title,
    company: jobs[idx].company,
    name,
    email,
    date: new Date().toISOString(),
    status: 'Applied'
  });

  setApps(apps);
  closePopup('applyPopup');
  openPopup('applySuccess');
  setTimeout(() => closePopup('applySuccess'), 1400);
}

// ===== Popup Controls =====
function openPopup(id) {
  document.getElementById(id)?.classList.add('show');
}

function closePopup(id) {
  document.getElementById(id)?.classList.remove('show');
}

// ===== Authentication (Demo Only) =====
function doLogin(e) {
  e && e.preventDefault();
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value.trim();

  if (u === 'admin' && p === 'admin123') {
    closePopup('loginPopup');
    window.location.href = 'admin-dashboard.html';
    return;
  }

  if (u === 'user' && p === 'user123') {
    closePopup('loginPopup');
    window.location.href = 'candidate-dashboard.html';
    return;
  }

  alert('Demo credentials:\nAdmin: admin/admin123\nCandidate: user/user123');
}

function doRegister(e) {
  e && e.preventDefault();
  alert('Demo register (no backend). Use demo credentials to login.');
  closePopup('registerPopup');
}

// ===== Admin Panel =====
function saveJob(idx) {
  alert('Saved (demo)');
}

function renderAdminJobsTable() {
  const tbody = document.querySelector('#jobsTable tbody');
  if (!tbody) return;

  const jobs = getJobs();
  tbody.innerHTML = '';

  jobs.forEach((job, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(job.title)}</td>
      <td>${escapeHtml(job.company)}</td>
      <td>${escapeHtml(job.location)}</td>
      <td>${escapeHtml(job.type || '')}</td>
      <td>
        <button onclick="editJob(${idx})">Edit</button>
        <button onclick="deleteJob(${idx})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('totalJobs') && (document.getElementById('totalJobs').innerText = jobs.length);
  document.getElementById('totalApplicants') && (document.getElementById('totalApplicants').innerText = getApps().length);
  document.getElementById('activeJobs') && (document.getElementById('activeJobs').innerText = jobs.length);
}

function openAddJob() {
  openPopup('addJobPopup');
}

function addJobFromAdmin() {
  const title = document.getElementById('newJobTitle').value.trim();
  const company = document.getElementById('newJobCompany').value.trim();
  const location = document.getElementById('newJobLocation').value.trim();
  const type = document.getElementById('newJobType').value;

  if (!title || !company) {
    alert('Fill title & company');
    return;
  }

  const jobs = getJobs();
  jobs.unshift({ title, company, location, type, posted: 'Just now' });
  setJobs(jobs);

  closePopup('addJobPopup');
  renderAdminJobsTable();
  renderJobs('jobsGrid');
  renderJobs('recentJobs');
}

function deleteJob(idx) {
  if (!confirm('Delete this job?')) return;

  const jobs = getJobs();
  jobs.splice(idx, 1);
  setJobs(jobs);

  renderAdminJobsTable();
  renderJobs('jobsGrid');
  renderJobs('recentJobs');
}

function editJob(idx) {
  const jobs = getJobs();
  const j = jobs[idx];

  const t = prompt('Edit title', j.title);
  if (t === null) return;

  const c = prompt('Edit company', j.company);
  if (c === null) return;

  const l = prompt('Edit location', j.location);
  if (l === null) return;

  j.title = t.trim() || j.title;
  j.company = c.trim() || j.company;
  j.location = l.trim() || j.location;

  jobs[idx] = j;
  setJobs(jobs);

  renderAdminJobsTable();
  renderJobs('jobsGrid');
  renderJobs('recentJobs');
}

// ===== Applications Table =====
function populateApplications() {
  const tbody = document.querySelector('#appsTable tbody');
  if (!tbody) return;

  const apps = getApps();
  tbody.innerHTML = '';

  apps.forEach((a, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(a.job)}</td>
      <td>${escapeHtml(a.company)}</td>
      <td>${escapeHtml(a.name)}</td>
      <td>${escapeHtml(a.status)}</td>
      <td><button onclick="withdraw(${i})">Withdraw</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function withdraw(i) {
  if (!confirm('Withdraw application?')) return;

  const apps = getApps();
  apps.splice(i, 1);
  setApps(apps);
  populateApplications();
}

// ===== Utility =====
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
  renderJobs('recentJobs');
  renderJobs('jobsGrid');
  renderAdminJobsTable();
  populateApplications();

  document.getElementById('homeSearch')?.addEventListener('input', () =>
    filterJobGrid('recentJobs', 'homeSearch', 'homeType', 'homeLoc')
  );

  document.getElementById('homeType')?.addEventListener('change', () =>
    filterJobGrid('recentJobs', 'homeSearch', 'homeType', 'homeLoc')
  );

  document.getElementById('homeLoc')?.addEventListener('change', () =>
    filterJobGrid('recentJobs', 'homeSearch', 'homeType', 'homeLoc')
  );
});
