const STORAGE_KEY = 'ry_demo_state';

const seed = {
  users: [
    { id: 'demo-admin', name: 'Campus Administrator', email: 'admin@rysystem.demo', role: 'admin', bio: 'RY-System demo administrator' },
    { id: 'demo-student', name: 'Yasmine El Amrani', email: 'student@rysystem.demo', role: 'student', bio: 'Computer science student interested in technology and innovation.' },
    { id: 'demo-student-2', name: 'Adam Bennani', email: 'adam@rysystem.demo', role: 'student', bio: 'Engineering student and robotics enthusiast.' },
    { id: 'demo-student-3', name: 'Salma Idrissi', email: 'salma@rysystem.demo', role: 'student', bio: 'Design and entrepreneurship enthusiast.' },
    { id: 'demo-student-4', name: 'Omar Alaoui', email: 'omar@rysystem.demo', role: 'student' },
    { id: 'demo-student-5', name: 'Lina Tazi', email: 'lina@rysystem.demo', role: 'student' },
    { id: 'demo-manager-tech', name: 'Mehdi Rami', email: 'club@rysystem.demo', role: 'club_manager', bio: 'President of the Tech Innovators Club.' },
    { id: 'demo-manager-robotics', name: 'Sara Kabbaj', email: 'robotics@rysystem.demo', role: 'club_manager' },
    { id: 'demo-manager-art', name: 'Anas Chraibi', email: 'art@rysystem.demo', role: 'club_manager' },
    { id: 'demo-manager-entrepreneur', name: 'Nour El Fassi', email: 'entrepreneur@rysystem.demo', role: 'club_manager' }
  ],
  clubs: [
    { id: 'club-tech', name: 'Tech Innovators', description: 'A community for curious minds exploring software engineering, artificial intelligence and emerging technologies.', category: 'Technology', managerId: 'demo-manager-tech', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900' },
    { id: 'club-robotics', name: 'Robotics & AI Club', description: 'Build, program and bring intelligent machines to life through hands-on projects and competitions.', category: 'Engineering', managerId: 'demo-manager-robotics', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900' },
    { id: 'club-art', name: 'Creative Minds', description: 'A space for photography, graphic design, illustration and creative collaboration.', category: 'Arts & Culture', managerId: 'demo-manager-art', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900' },
    { id: 'club-entrepreneur', name: 'Entrepreneurs Hub', description: 'Turn ideas into impact. Learn about startups, pitching, teamwork and business models.', category: 'Business', managerId: 'demo-manager-entrepreneur', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900' },
    { id: 'club-sport', name: 'Campus Sports', description: 'Stay active, meet new people and represent the campus in friendly tournaments.', category: 'Sports', managerId: 'demo-manager-tech', image: 'https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=900' },
    { id: 'club-volunteer', name: 'Green & Giving', description: 'Student-led initiatives focused on sustainability, volunteering and community support.', category: 'Community', managerId: 'demo-manager-art', image: 'https://images.unsplash.com/photo-1497436072909-f5e4be3b4a1f?w=900' }
  ],
  activities: [
    { id: 'activity-1', title: 'AI & Innovation Day', description: 'Discover practical AI applications, meet fellow enthusiasts and exchange ideas with guest speakers.', date: '2026-11-18', location: 'ENSA Khouribga', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000' },
    { id: 'activity-2', title: 'Robotics Workshop', description: 'An introductory hands-on session covering sensors, microcontrollers and autonomous robots.', date: '2026-11-22', location: 'Engineering Lab', image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=1000' },
    { id: 'activity-3', title: 'Startup Pitch Night', description: 'Student teams present ideas, receive feedback and learn how to communicate a strong pitch.', date: '2026-11-27', location: 'Innovation Hub', image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1000' },
    { id: 'activity-4', title: 'Design Sprint', description: 'A collaborative creative challenge: research a problem, sketch solutions and build a prototype.', date: '2026-12-02', location: 'Design Studio', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000' },
    { id: 'activity-5', title: 'Campus Football Tournament', description: 'Bring your team spirit to a friendly campus competition open to all students.', date: '2026-12-06', location: 'University Sports Field', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1000' },
    { id: 'activity-6', title: 'Green Campus Initiative', description: 'Join students for a campus clean-up and awareness activities around sustainability.', date: '2026-12-10', location: 'Main Campus', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1000' }
  ],
  registrations: [
    { id: 'reg-1', studentId: 'demo-student', clubId: 'club-tech', status: 'accepted' },
    { id: 'reg-2', studentId: 'demo-student', clubId: 'club-robotics', status: 'pending' },
    { id: 'reg-3', studentId: 'demo-student-2', clubId: 'club-robotics', status: 'accepted' },
    { id: 'reg-4', studentId: 'demo-student-3', clubId: 'club-art', status: 'accepted' },
    { id: 'reg-5', studentId: 'demo-student-4', clubId: 'club-tech', status: 'pending' },
    { id: 'reg-6', studentId: 'demo-student-5', clubId: 'club-entrepreneur', status: 'accepted' },
    { id: 'reg-7', studentId: 'demo-student-2', clubId: 'club-sport', status: 'accepted' },
    { id: 'reg-8', studentId: 'demo-student-3', clubId: 'club-volunteer', status: 'pending' }
  ],
  notifications: [],
  badges: [],
  archivedActivities: []
};

const clone = value => JSON.parse(JSON.stringify(value));
const read = () => {
  try { return { ...clone(seed), ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) }; }
  catch { return clone(seed); }
};
const write = state => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
const mutate = fn => { const state = read(); const result = fn(state); write(state); return result; };
const withClub = (state, club) => ({ ...club, manager: state.users.find(u => u.id === club.managerId) });

export const demoAccounts = [
  { role: 'Student', email: 'student@rysystem.demo', password: 'Student@123', id: 'demo-student' },
  { role: 'Club manager', email: 'club@rysystem.demo', password: 'Club@123', id: 'demo-manager-tech' },
  { role: 'Admin', email: 'admin@rysystem.demo', password: 'Admin@123', id: 'demo-admin' }
];

export const demoLogin = (email, password) => {
  const account = demoAccounts.find(a => a.email.toLowerCase() === email.trim().toLowerCase() && a.password === password);
  if (!account) return null;
  const user = read().users.find(u => u.id === account.id);
  return user ? { ...user, isDemo: true } : null;
};

export const demoApi = {
  getUser: async id => read().users.find(u => u.id === id) || null,
  getUsers: async () => read().users.filter(u => u.role !== 'admin'),
  getClubs: async () => read().clubs,
  getClubById: async id => read().clubs.find(c => c.id === id) || null,
  getManagedClub: async id => ({ id: read().clubs.find(c => c.managerId === id)?.id }),
  getActivities: async () => read().activities,
  getRecentActivities: async () => read().activities.slice(0, 8),
  getArchivedActivities: async () => read().archivedActivities,
  getStudentRegistrations: async studentId => read().registrations.filter(r => r.studentId === studentId).map(r => ({ ...r, clubId: r.clubId })),
  getClubRegistrations: async clubId => read().registrations.filter(r => r.clubId === clubId).map(r => ({ ...r, student: read().users.find(u => u.id === r.studentId) })),
  getClubsRegistrations: async () => read().registrations.map(r => ({ ...r, student: read().users.find(u => u.id === r.studentId), club: read().clubs.find(c => c.id === r.clubId) })),
  registerStudent: async (studentId, clubId) => mutate(s => {
    const old = s.registrations.find(r => r.studentId === studentId && r.clubId === clubId);
    if (old) return old;
    const reg = { id: `reg-${Date.now()}`, studentId, clubId, status: 'pending' }; s.registrations.push(reg); return reg;
  }),
  updateRegistrationStatus: async (studentId, clubId, status) => mutate(s => {
    const reg = s.registrations.find(r => r.studentId === studentId && r.clubId === clubId);
    if (reg) reg.status = status;
    return { success: !!reg };
  }),
  deleteRegistration: async (studentId, clubId) => mutate(s => {
    s.registrations = s.registrations.filter(r => !(r.studentId === studentId && r.clubId === clubId)); return { success: true };
  }),
  createClub: async form => mutate(s => {
    const club = Object.fromEntries(form.entries()); club.id = `club-${Date.now()}`;
    club.managerId ||= 'demo-manager-tech'; const manager = s.users.find(u => u.id === club.managerId); if (manager) manager.role = 'club_manager'; s.clubs.push(club); return { clubId: club.id };
  }),
  updateClub: async (id, form) => mutate(s => {
    const club = s.clubs.find(c => c.id === id);
    if (club) for (const [key, value] of form.entries()) club[key] = value;
    return { success: !!club };
  }),
  deleteClub: async id => mutate(s => { s.clubs = s.clubs.filter(c => c.id !== id); s.registrations = s.registrations.filter(r => r.clubId !== id); return { success: true }; }),
  transfereManager: async (id, managerId) => mutate(s => {
    const club = s.clubs.find(c => c.id === id);
    if (club) { const old = s.users.find(u => u.id === club.managerId); if (old) old.role = 'student'; club.managerId = managerId; const next = s.users.find(u => u.id === managerId); if (next) next.role = 'club_manager'; }
    return { success: !!club };
  }),
  createActivity: async form => mutate(s => { const a = Object.fromEntries(form.entries()); a.id = `activity-${Date.now()}`; s.activities.unshift(a); return { activityId: a.id }; }),
  updateActivity: async (id, form) => mutate(s => { const a = s.activities.find(x => x.id === id); if (a) for (const [k,v] of form.entries()) a[k] = v; return { success: !!a }; }),
  deleteActivity: async id => mutate(s => { s.activities = s.activities.filter(a => a.id !== id); return { success: true }; }),
  addNotifications: async (type, senderId, receiverId, message) => mutate(s => {
    const ids = Array.isArray(receiverId) ? receiverId : [receiverId];
    ids.forEach(id => s.notifications.push({ id: `notification-${Date.now()}-${id}`, type, senderId, receiverId: id, message, createdAt: new Date().toISOString() }));
    return { success: true };
  }),
  getNotifications: async userId => read().notifications.filter(n => n.receiverId === userId),
  deleteNotification: async (receiverId, notifId) => mutate(s => { s.notifications = s.notifications.filter(n => !(n.receiverId === receiverId && n.id === notifId)); return { success: true }; }),
  getSenderName: async senderId => ({ name: read().users.find(u => u.id === senderId)?.name || 'Campus team' }),
  awardBadge: async (studentId, data) => mutate(s => { s.badges.push({ ...data, studentId, id: `badge-${Date.now()}` }); return { success: true }; }),
  getBadges: async userId => read().badges.filter(b => b.studentId === userId),
  archiveActivity: async (activityId, data) => mutate(s => {
    const activity = s.activities.find(a => a.id === activityId);
    if (activity) { s.archivedActivities.push({ ...activity, ...data }); s.activities = s.activities.filter(a => a.id !== activityId); }
    return { success: true };
  }),
  updateProfile: async (userId, data) => mutate(s => {
    const user = s.users.find(u => u.id === userId); if (user) Object.assign(user, data); return user || {};
  }),
  updateUserPfp: async () => ({ success: true })
};
