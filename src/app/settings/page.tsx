"use client";

import { useState } from "react";
import { AnimatedToggle } from "@/components/ui/AnimatedToggle";
import { BentoGrid, BentoTileWrapper } from "@/components/dashboard/BentoGrid";
import { Bell, Lock, Moon, Shield, User } from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-8">
      <header>
        <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-zinc-400 mt-2">Manage your account preferences and settings.</p>
      </header>

      <BentoGrid>
        {/* Profile Settings */}
        <BentoTileWrapper className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
          <motion.article 
            className="h-full bg-card border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
             
             <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                   <User className="w-6 h-6" />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-white">Profile</h2>
                   <p className="text-sm text-zinc-400">Update your personal information</p>
                </div>
             </div>

             <div className="relative z-10 flex-1 flex flex-col justify-center space-y-4">
                <div className="flex items-center justify-between">
                   <div>
                      <h3 className="font-medium text-white">Public Profile</h3>
                      <p className="text-xs text-zinc-400">Make your learning streak visible to others</p>
                   </div>
                   <AnimatedToggle isOn={publicProfile} onToggle={setPublicProfile} />
                </div>
             </div>
          </motion.article>
        </BentoTileWrapper>

        {/* Appearance Settings */}
        <BentoTileWrapper className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1">
          <motion.article 
            className="h-full bg-card border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden"
          >
             <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                   <Moon className="w-6 h-6" />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-white">Appearance</h2>
                   <p className="text-sm text-zinc-400">Customize the UI</p>
                </div>
             </div>

             <div className="relative z-10 flex-1 flex flex-col justify-center space-y-4">
                <div className="flex items-center justify-between">
                   <div>
                      <h3 className="font-medium text-white">Dark Mode</h3>
                      <p className="text-xs text-zinc-400">Enforce dark theme globally</p>
                   </div>
                   <AnimatedToggle isOn={darkMode} onToggle={setDarkMode} />
                </div>
             </div>
          </motion.article>
        </BentoTileWrapper>

        {/* Notifications Settings */}
        <BentoTileWrapper className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
          <motion.article 
            className="h-full bg-card border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-transparent opacity-50" />
             
             <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                   <Bell className="w-6 h-6" />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-white">Notifications</h2>
                   <p className="text-sm text-zinc-400">Control how we contact you</p>
                </div>
             </div>

             <div className="relative z-10 flex-1 flex flex-col justify-center space-y-6">
                <div className="flex items-center justify-between">
                   <div>
                      <h3 className="font-medium text-white">Email Notifications</h3>
                      <p className="text-xs text-zinc-400">Receive weekly digests and updates</p>
                   </div>
                   <AnimatedToggle isOn={emailNotifications} onToggle={setEmailNotifications} />
                </div>
                
                <div className="flex items-center justify-between">
                   <div>
                      <h3 className="font-medium text-white">Push Notifications</h3>
                      <p className="text-xs text-zinc-400">Get alerted for new courses</p>
                   </div>
                   <AnimatedToggle isOn={pushNotifications} onToggle={setPushNotifications} />
                </div>
             </div>
          </motion.article>
        </BentoTileWrapper>

        {/* Security Settings */}
        <BentoTileWrapper className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1">
          <motion.article 
            className="h-full bg-card border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden group hover:border-red-500/30 transition-colors"
          >
             <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                   <Shield className="w-6 h-6" />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-white">Security</h2>
                   <p className="text-sm text-zinc-400">Account protection</p>
                </div>
             </div>

             <div className="relative z-10 flex-1 flex flex-col justify-center">
                <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors border border-white/5">
                  Change Password
                </button>
             </div>
          </motion.article>
        </BentoTileWrapper>

      </BentoGrid>
    </div>
  );
}
