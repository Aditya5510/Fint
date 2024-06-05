import {create} from "zustand"


type ns={
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
};

export const useNewAccount=create<ns>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))
