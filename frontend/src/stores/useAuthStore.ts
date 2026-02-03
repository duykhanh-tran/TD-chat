import { create } from 'zustand'
import { toast } from 'sonner'
import { authServices } from '@/services/authServices'
import type { AuthState } from '@/types/store'

export const useAuthStore = create<AuthState>((set, get) => ({
    accessToken: null,
    user: null,
    loading: false,

    setAccessToken: (accessToken: string ) => {
        set({ accessToken });
    },

    clearState: () => {
    set({ accessToken: null, user: null , loading: false})
    },

   signUp: async (username, password, email, firstName, lastName) => {
    try {
      set({ loading: true })
      await authServices.signUp(username, password, email, firstName, lastName)
      toast.success('Đăng ký thành công! Vui lòng đăng nhập')
    } catch (error) {
      console.error(error)
      toast.error('Đăng ký không thành công')
    } finally {
      set({ loading: false })
    }
   },

   signIn: async (username, password) => {
    try {
      set({ loading: true })
      const { accessToken } = await authServices.signIn(username, password)

      get().setAccessToken(accessToken);
      await get().fetchMe()

      toast.success('Chào mừng bạn trở lại với Moji!')
    } catch (error) {
      console.error(error)
      toast.error('Đăng nhập không thành công')
    } finally {
      set({ loading: false })
    }
   },

   signOut: async () => {
    try {
      get().clearState()
      await authServices.signOut()
      toast.success('Đăng xuất thành công!')
    } catch (error) {
      console.error(error)
      toast.error('Đăng xuất không thành công')
    }
   },

   fetchMe: async () => {
    try {
      set({ loading: true })
      const user = await authServices.fetchMe()
      set({ user });
    } catch (error) {
      console.error(error)
      set({ accessToken: null, user: null })
      toast.error('Lỗi khi lấy thông tin người dùng')
    } finally {
      set({ loading: false })
    }
   },

  refresh: async () => {
    try {
        set({ loading: true })
        const { user, fetchMe , setAccessToken} = get();
        const  accessToken  = await authServices.refresh();
        setAccessToken(accessToken);
        if (!user) {
            await fetchMe();
        }
    } catch (error) {
      console.error(error)
      toast.error('Phien dang nhap het han, vui lòng đăng nhập lại')
      get().clearState()
    }finally {
      set({ loading: false })
    }
  },
}));
