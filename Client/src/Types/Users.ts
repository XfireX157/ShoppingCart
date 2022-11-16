export interface Users {
    form: {
        email: string;
        senha: string;
        emailCadastro: string;
        senhaCadastro: string;
        senhaCadastroConfirm: string;
    }

    setForm: React.Dispatch<React.SetStateAction<{
        email: string;
        senha: string;
        emailCadastro: string;
        senhaCadastro: string;
        senhaCadastroConfirm: string;
    }>>

    error: {
        errorVazio: boolean;
        errorCaracter: boolean;
        errorVazioCadastro: boolean;
        errorCaracterCadastro: boolean;
        errorSenhaConfirm: boolean;
    }

    setError: React.Dispatch<React.SetStateAction<{
        errorVazio: boolean;
        errorCaracter: boolean;
        errorVazioCadastro: boolean;
        errorCaracterCadastro: boolean;
        errorSenhaConfirm: boolean;
    }>>

}