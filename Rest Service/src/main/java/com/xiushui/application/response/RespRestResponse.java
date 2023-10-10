package com.xiushui.application.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RespRestResponse<T>
{
	T respData;
	String errMsg;
	
}
