package com.xiushui.application.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(setterPrefix = "set", toBuilder = true)
public class RespGetDonateCategory
{
	private int id;
	private String name;
}
