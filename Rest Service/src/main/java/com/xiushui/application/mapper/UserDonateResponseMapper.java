package com.xiushui.application.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import com.xiushui.application.entity.UserDonate;
import com.xiushui.application.response.RespGetUserDonateInfo;

@Mapper
public interface UserDonateResponseMapper
{
	UserDonateResponseMapper INSTANCE = Mappers.getMapper(UserDonateResponseMapper.class);
	
	@Mappings({
        @Mapping(target = "userId", source = "userDonate.userInfo.id"),
        @Mapping(target = "userName", source = "userDonate.userInfo.name"),
        @Mapping(target = "userType", source = "userDonate.userInfo.type"),
        @Mapping(target = "category", source = "userDonate.category.name")
    })
	RespGetUserDonateInfo convert(UserDonate userDonate);
	
	List<RespGetUserDonateInfo> convertList(List<UserDonate> userDonate);
}
