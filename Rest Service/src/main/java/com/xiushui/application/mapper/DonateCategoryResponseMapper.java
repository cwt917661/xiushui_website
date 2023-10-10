package com.xiushui.application.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import com.xiushui.application.entity.DonateCategory;
import com.xiushui.application.response.RespGetDonateCategory;

@Mapper
public interface DonateCategoryResponseMapper
{
	DonateCategoryResponseMapper INSTANCE = Mappers.getMapper(DonateCategoryResponseMapper.class);
	
	@Mappings({
        @Mapping(target = "id", source = "category.id"),
        @Mapping(target = "name", source = "category.name"),
    })
	RespGetDonateCategory convert(DonateCategory category);
	
	List<RespGetDonateCategory> convertList(List<DonateCategory> category);
}
