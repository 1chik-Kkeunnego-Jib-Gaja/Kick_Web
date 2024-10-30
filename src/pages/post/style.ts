import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: #333;
  display: flex;
  justify-content: flex-start;
`;

export const BackButton = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

export const ImageUploadBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  height: 200px;
  background-color: #aeadad;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UploadIcon = styled.span`
  font-size: 3rem;
  color: #fff;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ImageInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const Form = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f5f5f5;
  outline: none;
  font-family: "Pretendard-Regular";

  &::placeholder {
    color: #bcbcbc;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export const TagRemoveButton = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const TagInput = styled.input`
  border: none;
  outline: none;
  font-size: 0.9rem;
  background: transparent;
  font-family: "Pretendard-Regular";

  &::placeholder {
    color: #bcbcbc;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f5f5f5;
  resize: none;
  height: 8rem;
  outline: none;
  font-family: "Pretendard-Regular";

  &::placeholder {
    color: #bcbcbc;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
