async def predict(file: UploadFile = File(...)):
    try:
        print(f"Received file: {file.filename}, content_type: {file.content_type}, size: {file.size}")
        
        file_bytes = await file.read()
        print(f"File read successfully, bytes length: {len(file_bytes)}")
        
        # Validate file type
        if not file.content_type.startswith('audio/'):
            print(f"Invalid file type: {file.content_type}")
            return JSONResponse(
                status_code=400, 
                content={"error": f"File must be an audio file, received: {file.content_type}"}
            )
        
        # Mock prediction
        print("Starting mock prediction...")
        predicted_class, confidence, raw_predictions = mock_predict_audio(file_bytes)
        print(f"Prediction complete: class={predicted_class}, confidence={confidence}")
        
        return JSONResponse(content={
            "predicted_class": predicted_class,
            "confidence": confidence,
            "raw_predictions": raw_predictions
        })
        
    except Exception as e:
        print(f"Error in predict endpoint: {str(e)}")
        import traceback
        traceback.print_exc()
        return JSONResponse(status_code=500, content={"error": str(e)})
