import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { RoleProvider } from './contexts/RoleContext';
import { AppShell } from './components/AppShell';
import { ScrollToTop } from './components/ScrollToTop';
import { Landing } from './pages/site/Landing';
import { HowItWorks } from './pages/site/HowItWorks';
import { Features } from './pages/site/Features';
import { InstitutionsDirectory } from './pages/site/InstitutionsDirectory';
import { ForInstitutions } from './pages/site/ForInstitutions';
import { ForOrganizations } from './pages/site/ForOrganizations';
import { Roles } from './pages/site/Roles';
import { About } from './pages/site/About';
import { Today } from './pages/Today';
import { Feed } from './pages/Feed';
import { Discover } from './pages/Discover';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { Communities } from './pages/Communities';
import { CommunityDetail } from './pages/CommunityDetail';
import { Clubs } from './pages/Clubs';
import { ClubProfile } from './pages/ClubProfile';
import { Resources } from './pages/Resources';
import { Opportunities } from './pages/Opportunities';
import { Sports } from './pages/Sports';
import { Saved } from './pages/Saved';
import { Profile } from './pages/Profile';
import { Institution } from './pages/Institution';
import { Workspace } from './pages/Workspace';
import { Notifications } from './pages/Notifications';
import { Admin } from './pages/Admin';
import { Onboarding } from './pages/Onboarding';
import { InstitutionOnboarding } from './pages/InstitutionOnboarding';

export function App() {
  return (
    <ThemeProvider>
      <RoleProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/institutions" element={<InstitutionsDirectory />} />
            <Route path="/for-institutions" element={<ForInstitutions />} />
            <Route path="/for-organizations" element={<ForOrganizations />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/about" element={<About />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/register-institution" element={<InstitutionOnboarding />} />
            <Route
              path="*"
              element={
                <AppShell>
                  <Routes>
                    <Route path="/today" element={<Today />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:eventId" element={<EventDetail />} />
                    <Route path="/communities" element={<Communities />} />
                    <Route path="/communities/:communityId" element={<CommunityDetail />} />
                    <Route path="/clubs" element={<Clubs />} />
                    <Route path="/clubs/:clubId" element={<ClubProfile />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/institution" element={<Institution />} />
                    <Route path="/workspace" element={<Workspace />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Navigate to="/today" replace />} />
                  </Routes>
                </AppShell>
              } />

          </Routes>
        </BrowserRouter>
      </RoleProvider>
    </ThemeProvider>);

}