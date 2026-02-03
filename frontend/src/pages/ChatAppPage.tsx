// import React from 'react'
import Logout from '@/components/auth/Logout';
import { Button } from '@/components/ui/button';
import api from '@/lib/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import { toast } from 'sonner';

const ChatAppPage = () => {
  const  user  = useAuthStore((s) => s.user);

  const handelOnClick = async () => {
    try {
      await api.get("/users/test", {withCredentials: true});
      toast.success("Test API thành công");
    } catch (error) {
      toast.error("Test API không thành công");
      console.error(error);
    }
  }
  return (
    <div>
      <h1> Welcome {user?.username}</h1>
      <Logout />
      <Button onClick = {handelOnClick}>  Test</Button>
    </div>
  )
}

export default ChatAppPage